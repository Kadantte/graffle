import type * as $ from '../../../../../../src/entrypoints/schema.js'
import type * as $Scalar from './Scalar.js'

export namespace Schema {
  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Root
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Query = $.Output.ObjectQuery<{
    id: $.Field<'id', $.Output.Nullable<$Scalar.ID>, null>
    idNonNull: $.Field<'idNonNull', $Scalar.ID, null>
  }>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Enum
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  // -- no types --

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            InputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  // -- no types --

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                             Interface
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  // -- no types --

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Object
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  // -- no types --

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Union
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  // -- no types --
}
//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//

import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'

export interface Schema<$Scalars extends $$Utilities.SchemaKit.Scalar.ScalarMap = {}>
  extends $$Utilities.SchemaIndexBase
{
  name: Data.Name
  RootTypesPresent: ['Query']
  RootUnion: Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: null
    Subscription: null
  }
  allTypes: {
    Query: Schema.Query
  }
  objects: {}
  unions: {}
  interfaces: {}
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
