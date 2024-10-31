import type { Anyware } from '../../lib/anyware/__.js'
import type { Chain } from '../../lib/chain/__.js'
import type { RequestPipeline } from '../../requestPipeline/__.js'
import type { Schema } from '../../types/Schema/__.js'
import type { Extension } from './extension/extension.js'
import type { Config } from './Settings/Config.js'
import type { InputStatic } from './Settings/Input.js'
import { inputToConfig } from './Settings/InputToConfig.js'

export interface Context {
  name: string
  input: InputStatic
  config: Config
  retry: Anyware.Extension2<RequestPipeline.Core, { retrying: true }> | null
  extensions: Extension[]
  scalars: Schema.Scalar.Registry
  typeHooks: {
    onRequestResult: Extension.Hooks.OnRequestResult[]
    property: Chain.Extension[]
    onRequestDocumentRootType: Extension.Hooks.OnRequestDocumentRootType[]
  }
}

export type TypeHooksEmpty = {
  property: []
  onRequestDocumentRootType: []
  onRequestResult: []
}

export const createContext = (contextWithoutConfig: ContextWithoutConfig): Context => {
  let config: Config | null

  return {
    ...contextWithoutConfig,
    get config(): Config {
      const configFound = config ?? inputToConfig(contextWithoutConfig.input)
      return configFound as any
    },
  } as Context
}

export type ContextWithoutConfig = Omit<Context, 'config' | 'typeHooks'>
