import type { Context } from '../../entrypoints/utilities-for-generated.js'
import { assertEqual } from '../assert-equal.js'
import type { ConfigManager } from './__.js'

interface a1 {
  a: { b: number }
  b: string
}

interface x1 {
  z: number
  a: [1]
  c: { x: 1 }
}

assertEqual<
  ConfigManager.SetProperties<x1, {
    a: [1, 2]
    b: boolean
    c: { y: 2 }
  }>,
  { z: number; a: [1, 2]; b: boolean; c: { y: 2 } }
>()

// dprint-ignore
{
assertEqual<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, [], { a2: 2 }>     , { a: { b: 2 }; a2: 2 }>()
assertEqual<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a'], { b: 3 }>   , { a: { b: 3 } }>()
assertEqual<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a', 'b'], 3>     , { a: { b: 3 } }>()
// never
assertEqual<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, [], 1>              , never>()
assertEqual<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['x'], 1>           , never>()
assertEqual<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a', 'b', 'c'], 3> , { a: { b: never } }>()

assertEqual<ConfigManager.SetKey<a1, 'a', { b: 2 }>                  , { a: { b: 2 }; b: string }>()
assertEqual<ConfigManager.SetKey<{ a?: number }, 'a', 1>             , { a: 1 }>()
assertEqual<ConfigManager.SetKey<{ a?: number; b?: number }, 'a', 1> , { a: 1; b?: number }>()

assertEqual<ConfigManager.SetAtPath<a1, [], 9>               , a1>()
assertEqual<ConfigManager.SetAtPath<a1, ['a'], { b: 2 }>     , { a: { b: 2 }; b: string }>()
assertEqual<ConfigManager.SetAtPath<a1, ['a'], { x: 2 }>     , { a: { x: 2 }; b: string }>()
assertEqual<ConfigManager.SetAtPath<a1, ['a', 'b'], 9>       , { a: { b: 9 }; b: string }>()
assertEqual<ConfigManager.SetAtPath<a1, ['a', 'b', 'c'], 9>  , { a: { b: { c: 9 } }; b: string }>()
assertEqual<ConfigManager.SetAtPath<a1, ['a', 'b2', 'c'], 9> , { a: { b: number; b2: { c: 9 } }; b: string }>()
assertEqual<ConfigManager.SetAtPath<a1, ['c'], 9>            , { a: { b: number }; b: string; c: 9 }>()

assertEqual<ConfigManager.UpdateKeyWithAppend<{x: []}, 'x', 1>  , { x: [1] }>()
assertEqual<ConfigManager.UpdateKeyWithAppend<{x: [1]}, 'x', 2> , { x: [1, 2] }>()

assertEqual<ConfigManager.UpdateKeyWithIntersection<{x: {}}, 'x', {}>          , { x: {} }>()
assertEqual<ConfigManager.UpdateKeyWithIntersection<{x: {}}, 'x', {a:1}>       , { x: {a:1} }>()
assertEqual<ConfigManager.UpdateKeyWithIntersection<{x: {b:2}}, 'x', {a:1}>    , { x: {a:1; b:2} }>()
}

assertEqual<
  ConfigManager.SetAtPath<
    Context,
    ['typeHooks', 'onRequestResult'],
    Context['typeHooks']['onRequestResult']
  >,
  Context
>()
