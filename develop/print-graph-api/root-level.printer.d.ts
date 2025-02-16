import { GraphApiSchema, GraphApiObjectDefinition, GraphApiObjectKind, GraphApiComponents } from "../types";
import { Maybe } from "./declarations";
export declare function printSchemaDefinition(schema: GraphApiSchema): Maybe<string>;
export declare function printOperations(name: string, operations?: GraphApiObjectDefinition<GraphApiObjectKind>['type']['methods']): string;
export declare function printTypeDefinitions(components?: GraphApiComponents): string[];
//# sourceMappingURL=root-level.printer.d.ts.map