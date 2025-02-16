import { DirectiveLocation } from "graphql";
import { GraphApiNamedDefinition } from "./types";
export declare const GRAPH_API_NODE_KIND_ID = "ID";
export declare const GRAPH_API_NODE_KIND_STRING = "string";
export declare const GRAPH_API_NODE_KIND_INTEGER = "integer";
export declare const GRAPH_API_NODE_KIND_FLOAT = "float";
export declare const GRAPH_API_NODE_KIND_BOOLEAN = "boolean";
export declare const GRAPH_API_NODE_KIND_ENUM = "enum";
export declare const GRAPH_API_NODE_KIND_OBJECT = "object";
export declare const GRAPH_API_NODE_KIND_INTERFACE = "interface";
export declare const GRAPH_API_NODE_KIND_SCALAR = "scalar";
export declare const GRAPH_API_NODE_KIND_LIST = "list";
export declare const GRAPH_API_NODE_KIND_UNION = "union";
export declare const GRAPH_API_NODE_KIND_INPUT_OBJECT = "input";
export declare const GRAPH_API_SCALAR_NODE_KINDS: readonly ["ID", "string", "integer", "float", "boolean", "scalar"];
export declare const GRAPH_API_DIRECTIVE_LOCATIONS: readonly [DirectiveLocation.QUERY, DirectiveLocation.MUTATION, DirectiveLocation.SUBSCRIPTION, DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_DEFINITION, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT, DirectiveLocation.VARIABLE_DEFINITION, DirectiveLocation.SCHEMA, DirectiveLocation.SCALAR, DirectiveLocation.OBJECT, DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ARGUMENT_DEFINITION, DirectiveLocation.INTERFACE, DirectiveLocation.UNION, DirectiveLocation.ENUM, DirectiveLocation.ENUM_VALUE, DirectiveLocation.INPUT_OBJECT, DirectiveLocation.INPUT_FIELD_DEFINITION];
export declare const GRAPH_API_VERSION = "1.0.0";
export declare const GRAPH_API_KIND_TO_GRAPH_QL_TYPE: {
    ID: string;
    string: string;
    integer: string;
    float: string;
    boolean: string;
    scalar: (entity?: GraphApiNamedDefinition) => string | undefined;
    enum: (entity?: GraphApiNamedDefinition) => string | undefined;
    object: (entity?: GraphApiNamedDefinition) => string | undefined;
    interface: (entity?: GraphApiNamedDefinition) => string | undefined;
    input: (entity?: GraphApiNamedDefinition) => string | undefined;
    list: (entity?: GraphApiNamedDefinition) => string | undefined;
    union: (entity?: GraphApiNamedDefinition) => string | undefined;
};
export declare const BUILT_IN_DIRECTIVE_SPECIFIED_BY = "specifiedBy";
export declare const BUILT_IN_DIRECTIVE_SKIP = "skip";
export declare const BUILT_IN_DIRECTIVE_INCLUDE = "include";
export declare const BUILT_IN_DIRECTIVE_DEPRECATED = "deprecated";
export declare const BUILT_IN_DIRECTIVE_ONE_OF = "oneOf";
export declare const BUILT_IN_DIRECTIVES: readonly ["include", "skip", "specifiedBy", "deprecated", "oneOf"];
export declare const BUILT_IN_DIRECTIVES_SET: Set<string>;
export declare const GRAPH_API_DIRECTIVE_DEPRECATED_DEFAULT_REASON = "No longer supported";
//# sourceMappingURL=constants.d.ts.map