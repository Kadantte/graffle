import { describe, expect, expectTypeOf } from 'vitest'
import { DateScalar } from '../../../../tests/_/fixtures/scalars.js'
import { kitchenSink, test } from '../../../../tests/_/helpers.js'

describe(`query`, () => {
  test(`scalar`, async ({ kitchenSink, kitchenSinkData: db }) => {
    await expect(kitchenSink.query.id()).resolves.toEqual(db.id1)
  })
  test(`argument`, async ({ kitchenSink }) => {
    await expect(kitchenSink.query.stringWithArgs({ $: { id: `x` } })).resolves.toEqual(`{"id":"x"}`)
  })

  test(`object`, async ({ kitchenSink, kitchenSinkData: db }) => {
    await expect(kitchenSink.query.object({ id: true })).resolves.toEqual({ id: db.id })
  })
  test(`object with arguments`, async ({ kitchenSink }) => {
    await expect(kitchenSink.query.objectWithArgs({ $: { id: `x` }, id: true })).resolves.toEqual({ id: `x` })
  })
  test(`union found`, async ({ kitchenSink, kitchenSinkData: db }) => {
    await expect(kitchenSink.query.unionFooBar({ ___on_Foo: { id: true } })).resolves.toEqual({ id: db.id })
  })
  test(`union not found`, async ({ kitchenSink }) => {
    await expect(kitchenSink.query.unionFooBar({ ___on_Bar: { int: true } })).resolves.toEqual({})
  })
  test(`interface fields`, async ({ kitchenSink, kitchenSinkData: db }) => {
    await expect(kitchenSink.query.interface({ id: true })).resolves.toEqual({ id: db.id })
  })
  test(`interface instance found`, async ({ kitchenSink, kitchenSinkData: db }) => {
    const result = await kitchenSink.query.interface({ ___on_Object1ImplementingInterface: { int: true } })
    expect(result).toEqual({ int: db.int })
  })
  test(`interface instance not found`, async ({ kitchenSink }) => {
    const result = await kitchenSink.query.interface({ ___on_Object2ImplementingInterface: { boolean: true } })
    expect(result).toEqual({})
  })
  describe(`custom scalar`, () => {
    test(`result without codec`, async ({ kitchenSinkData: db }) => {
      const result = await kitchenSink.query.dateArg()
      expect(result).toEqual(db.date0Encoded)
      expectTypeOf(result).toEqualTypeOf<string | null>()
    })
    test(`result with codec`, async ({ kitchenSinkData: db }) => {
      const result = await kitchenSink.scalar(DateScalar).query.dateArg()
      expect(result).toEqual(db.date0)
      expectTypeOf(result).toEqualTypeOf<Date | null>()
    })
    test(`argument without codec`, async ({ kitchenSinkData: db }) => {
      await kitchenSink.query.dateArg({ $: { date: db.date0Encoded } })
    })
    test(`argument with codec`, async ({ kitchenSinkData: db }) => {
      await kitchenSink.scalar(DateScalar).query.dateArg({ $: { date: db.date0 } })
    })
  })
})
