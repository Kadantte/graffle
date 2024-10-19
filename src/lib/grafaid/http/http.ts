import type { GraphQLFormattedError } from 'graphql'
import { type ExecutionResult, GraphQLError } from 'graphql'
import { CONTENT_TYPE_GQL, CONTENT_TYPE_JSON } from '../../http.js'
import { isRecordLikeObject } from '../../prelude.js'
import type { Variables } from '../graphql.js'

export interface RequestConfig {
  query: string
  variables?: Variables
  operationName?: string
}

export const parseExecutionResult = (result: unknown): ExecutionResult => {
  if (typeof result !== `object` || result === null) {
    throw new Error(`Invalid execution result: result is not object`)
  }

  let errors = undefined
  let data = undefined
  let extensions = undefined

  if (`errors` in result) {
    if (
      !Array.isArray(result.errors)
      || result.errors.some(
        error => !(isRecordLikeObject(error) && `message` in error && typeof error[`message`] === `string`),
      )
    ) {
      throw new Error(`Invalid execution result: errors is not array of formatted errors`) // prettier-ignore
    }
    errors = result.errors.map((error: GraphQLFormattedError) =>
      error instanceof GraphQLError ? error : new GraphQLError(error.message, error)
    )
  }

  // todo add test coverage for case of null. @see https://github.com/jasonkuhrt/graffle/issues/739
  if (`data` in result) {
    if (!isRecordLikeObject(result.data) && result.data !== null) {
      throw new Error(`Invalid execution result: data is not plain object`) // prettier-ignore
    }
    data = result.data
  }

  if (`extensions` in result) {
    if (!isRecordLikeObject(result.extensions)) {
      throw new Error(`Invalid execution result: extensions is not plain object`) // prettier-ignore
    }
    extensions = result.extensions
  }

  return {
    data,
    errors,
    extensions,
  }
}

/**
 * @see https://graphql.github.io/graphql-over-http/draft/#sec-Media-Types
 */
export const CONTENT_TYPE_REC = CONTENT_TYPE_JSON

/**
 * @see https://graphql.github.io/graphql-over-http/draft/#sec-Accept
 * @see https://graphql.github.io/graphql-over-http/draft/#sec-Legacy-Watershed
 */
export const ACCEPT_REC = `${CONTENT_TYPE_GQL}; charset=utf-8, ${CONTENT_TYPE_JSON}; charset=utf-8`

export const postRequestHeadersRec = {
  accept: ACCEPT_REC,
  'content-type': CONTENT_TYPE_REC,
}

export const getRequestHeadersRec = {
  accept: ACCEPT_REC,
}

export const getRequestEncodeSearchParameters = (request: RequestConfig): Record<string, string> => {
  return {
    query: request.query,
    ...(request.variables ? { variables: JSON.stringify(request.variables) } : {}),
    ...(request.operationName ? { operationName: request.operationName } : {}),
  }
}
export type getRequestEncodeSearchParameters = typeof getRequestEncodeSearchParameters

export const postRequestEncodeBody = (input: RequestConfig): BodyInit => {
  return JSON.stringify({
    query: input.query,
    variables: input.variables,
    operationName: input.operationName,
  })
}

export type postRequestEncodeBody = typeof postRequestEncodeBody