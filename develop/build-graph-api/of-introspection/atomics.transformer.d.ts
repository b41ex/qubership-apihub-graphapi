import type { IntrospectionType, IntrospectionEnumValue, IntrospectionField, IntrospectionInputValue } from "graphql";
import type { GraphApiDefinition, GraphApiNamedDefinition } from "../../types";
export declare function transformBaseType(baseType: IntrospectionType | IntrospectionEnumValue | IntrospectionField | IntrospectionInputValue): GraphApiDefinition;
export declare function transformNamedType(baseType: IntrospectionType | IntrospectionField | IntrospectionInputValue): GraphApiNamedDefinition;
//# sourceMappingURL=atomics.transformer.d.ts.map