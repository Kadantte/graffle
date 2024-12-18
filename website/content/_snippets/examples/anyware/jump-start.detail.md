::: details Example

<div class="ExampleSnippet">
<a href="../../examples/anyware/jump-start">Jump Start</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

Graffle
  .create({ schema: `http://localhost:3000/graphql` })
  // Notice how we **start** with the `exchange` hook, skipping the `encode` and `pack` hooks.
  .anyware(async ({ exchange }) => {
    //              ^^^^^^^^
    if (exchange.input.transportType !== `http`) return exchange()

    const mergedHeaders = new Headers(exchange.input.request.headers)
    mergedHeaders.set(`X-Custom-Header`, `123`)

    const { unpack } = await exchange({
      input: {
        ...exchange.input,
        headers: mergedHeaders,
      },
    })
    const { decode } = await unpack()
    const result = await decode()
    return result
  })
```
<!-- dprint-ignore-end -->

</div>
:::
