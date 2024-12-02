import { TransportHttp } from "graffle/extensions/transport-http";
import * as $$Utilities from "graffle/utilities-for-generated";
import * as $$Data from "./data.js";
import * as $$Scalar from "./scalar.js";
import * as $$SchemaDrivenDataMap from "./schema-driven-data-map.js";

const context = $$Utilities.useReducer(
  {
    ...$$Utilities.Context.States.contextEmpty,
    name: $$Data.Name,
    schemaMap: $$SchemaDrivenDataMap.schemaDrivenDataMap,
    scalars: $$Scalar.$registry,
  },
  TransportHttp({
    url: $$Data.defaultSchemaUrl,
  }),
);

export const create = $$Utilities.createConstructorWithContext(
  context,
);
