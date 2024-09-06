import type { httpMethodGet, httpMethodPost } from '../../../lib/http.js'

export const MethodMode = {
  post: `post`,
  getReads: `getReads`,
} as const

export type MethodModeGetReads = typeof MethodMode['getReads']
export type MethodModePost = typeof MethodMode['post']
export type MethodMode = MethodModePost | MethodModeGetReads

export type TransportHttpInput = {
  /**
   * The HTTP method to use to make the request.
   *
   * Note that this is not just about the HTTP method but also about how the payload is sent.
   * Namely, `get` will send the payload as part of the URL search parameters while `post` will send it as a JSON body.
   *
   * Options:
   *
   * 1. `post` - Apply https://graphql.github.io/graphql-over-http/draft/#sec-POST
   * 2. `getReads` - Apply https://graphql.github.io/graphql-over-http/draft/#sec-GET
   *
   * @defaultValue `post`
   */
  methodMode?: MethodMode
  headers?: HeadersInit
  signal?: AbortSignal | null
  raw?: RequestInit
}

/**
 * An extension of {@link RequestInit} that adds a required `url` property and makes `body` required.
 */
export type CoreExchangePostRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModePost | MethodModeGetReads
  method: httpMethodPost
  url: string | URL // todo URL for config and string only for input. Requires anyware to allow different types for input and existing config.
  body: BodyInit
}

export type CoreExchangeGetRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModeGetReads
  method: httpMethodGet
  url: string | URL
}

export const defaultMethodMode: MethodMode = `post`