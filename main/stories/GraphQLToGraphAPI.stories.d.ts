import { Meta, StoryObj } from '@storybook/react';
import { GraphApiPlayground, ModeType, ResultType } from './GraphAPIPlayground';
declare const meta: Meta<typeof GraphApiPlayground>;
export default meta;
type StoryArgs = {
    mode: ModeType;
    resultFormat?: ResultType;
};
type Story = StoryObj<StoryArgs>;
export declare const GraphQLToGraphAPI: Story;
export declare const IntrospectionToGraphAPI: Story;
export declare const GraphAPIToGraphQL: Story;
export declare const GraphQLToGraphQL: Story;
//# sourceMappingURL=GraphQLToGraphAPI.stories.d.ts.map