import { trace, type Tracer } from '@opentelemetry/api'
import { createExtension } from '../../5_createExtension/createExtension.js'
import { createConfig, type Input } from './config.js'

const name = `Opentelemetry`

export const Opentelemetry = (input?: Input) => {
  const config = createConfig(input)
  const tracer = trace.getTracer(config.tracerName)
  const startActiveGraffleSpan = startActiveSpan(tracer)

  return createExtension({
    name,
    anyware: async ({ encode }) => {
      return await startActiveGraffleSpan(`request`, async () => {
        const { pack } = await startActiveGraffleSpan(`encode`, encode)
        const { exchange } = await startActiveGraffleSpan(`pack`, pack)
        const { unpack } = await startActiveGraffleSpan(`exchange`, exchange)
        const { decode } = await startActiveGraffleSpan(`unpack`, unpack)
        const result = await startActiveGraffleSpan(`decode`, decode)
        return result
      })
    },
  })
}

const startActiveSpan = (tracer: Tracer) => <Result>(name: string, fn: () => Promise<Result>): Promise<Result> => {
  return tracer.startActiveSpan(name, async (span) => {
    const result = await fn()
    span.end()
    return result
  })
}
