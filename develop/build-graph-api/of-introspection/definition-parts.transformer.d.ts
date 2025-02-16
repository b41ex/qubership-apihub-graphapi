import type { IntrospectionInputValue, IntrospectionTypeRef } from "graphql";
import type { GraphApiArgs, GraphApiListDefinition, GraphApiRef, GraphApiScalarDefinition, GraphApiUsage } from "../../types";
export declare function transformType2Definition(gqlType: IntrospectionTypeRef): GraphApiRef | GraphApiScalarDefinition | GraphApiListDefinition;
export declare function transformType2Usage(gqlType: IntrospectionTypeRef, defaultValue?: unknown): GraphApiUsage;
export declare function transformArgs(args: ReadonlyArray<IntrospectionInputValue>): GraphApiArgs;
//# sourceMappingURL=definition-parts.transformer.d.ts.map