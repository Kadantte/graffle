import { createExtension } from '../../../extension/extension.js'
import type { Anyware, Anyware as AnywareLib } from '../../../lib/anyware/__.js'
import { Builder } from '../../../lib/builder/__.js'
import type { RequestPipeline } from '../../../requestPipeline/__.js'
import { type Context } from '../context.js'

export interface BuilderExtensionAnyware extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Anyware<this['params']>
}

export interface Anyware<$Arguments extends Builder.Extension.Parameters<BuilderExtensionAnyware>> {
  /**
   * TODO Anyware Docs.
   */
  anyware: (
    anyware: AnywareLib.Extension2<RequestPipeline.Core<$Arguments['context']['config']>>,
  ) => Builder.Definition.MaterializeWithNewContext<$Arguments['chain'], $Arguments['context']>
}

export const builderExtensionAnyware = Builder.Extension.create<BuilderExtensionAnyware>((builder, context) => {
  const properties = {
    anyware: (anyware: Anyware.Extension2<RequestPipeline.Core>) => {
      return builder({
        ...context,
        extensions: [
          ...context.extensions,
          createExtension({
            name: `InlineAnyware`,
            create: () => ({ onRequest: anyware }),
          })(),
        ],
      })
    },
  }
  return properties
})