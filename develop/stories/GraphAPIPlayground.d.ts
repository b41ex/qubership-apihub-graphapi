import { FC } from 'react';
type GraphApiPlaygroundProps = {
    mode: ModeType;
    resultFormat: ResultType;
};
export declare const GraphApiPlayground: FC<GraphApiPlaygroundProps>;
export declare const GRAPHQL_TO_GRAPHAPI = "GraphQL to GraphAPI";
export declare const INTROSPECTION_TO_GRAPHAPI = "Introspection to GraphAPI";
export declare const GRAPHAPI_TO_GRAPHQL = "GraphAPI to GraphQL";
export declare const GRAPHQL_TO_GRAPHQL = "GraphQL to GraphQL";
export declare const SOURCE_TYPE_GRAPHQL = "graphql";
export declare const SOURCE_TYPE_INTROSPECTION = "introspection";
export declare const RESULT_TYPE_YAML = "yaml";
export declare const RESULT_TYPE_JSON = "json";
export type ModeType = typeof GRAPHQL_TO_GRAPHAPI | typeof INTROSPECTION_TO_GRAPHAPI | typeof GRAPHAPI_TO_GRAPHQL | typeof GRAPHQL_TO_GRAPHQL;
export type SourceType = typeof SOURCE_TYPE_GRAPHQL | typeof SOURCE_TYPE_INTROSPECTION;
export type ResultType = typeof RESULT_TYPE_YAML | typeof RESULT_TYPE_JSON;
export {};
//# sourceMappingURL=GraphAPIPlayground.d.ts.map