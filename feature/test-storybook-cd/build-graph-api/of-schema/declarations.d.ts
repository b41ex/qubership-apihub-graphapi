export declare const USED_BUILT_IN_DIRECTIVES: Set<string>;
export declare const SCHEMA_COMPONENT_TO_GRAPHAPI_COMPONENT_MAP: {
    readonly ScalarTypeDefinition: "scalars";
    readonly ObjectTypeDefinition: "objects";
    readonly InterfaceTypeDefinition: "interfaces";
    readonly InputObjectTypeDefinition: "inputObjects";
    readonly DirectiveDefinition: "directives";
    readonly UnionTypeDefinition: "unions";
    readonly EnumTypeDefinition: "enums";
};
export type ComponentsKind = keyof typeof SCHEMA_COMPONENT_TO_GRAPHAPI_COMPONENT_MAP;
//# sourceMappingURL=declarations.d.ts.map