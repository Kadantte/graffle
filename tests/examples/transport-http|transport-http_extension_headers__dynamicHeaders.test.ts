// @vitest-environment node

// WARNING:
// This test is generated by scripts/generate-example-derivatives/generate.ts
// Do not modify this file directly.

import { expect, test } from 'vitest'
import { encode } from '../../examples/__outputs__/transport-http|transport-http_extension_headers__dynamicHeaders.output.encoder.js'
import { runExample } from '../../scripts/generate-examples-derivatives/helpers.js'

test(`transport-http|transport-http_extension_headers__dynamicHeaders`, async () => {
  const exampleResult = await runExample(
    `./examples/transport-http|transport-http_extension_headers__dynamicHeaders.ts`,
  )
  // Examples should output their data results.
  const exampleResultMaybeEncoded = encode(exampleResult)
  // If ever outputs vary by Node version, you can use this to snapshot by Node version.
  // const nodeMajor = process.version.match(/v(\d+)/)?.[1] ?? `unknown`
  await expect(exampleResultMaybeEncoded).toMatchFileSnapshot(
    `../.././examples/__outputs__/transport-http|transport-http_extension_headers__dynamicHeaders.output.test.txt`,
  )
})