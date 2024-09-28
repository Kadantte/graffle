::: details Example

<div class="ExampleSnippet">
<a href="../../examples/raw/raw-string">Raw String</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle.create({
  schema: `http://localhost:3000/graphql`,
})

const document = /* gql */ `
  {
    pokemon {
      name
    }
  }	
`

const data = await graffle.rawString({ document })

console.log(data)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  pokemon: [
    { name: 'Pikachu' },
    { name: 'Charizard' },
    { name: 'Squirtle' },
    { name: 'Bulbasaur' }
  ]
}
```
<!-- dprint-ignore-end -->

</div>
:::