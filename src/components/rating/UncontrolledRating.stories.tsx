import {Meta, StoryObj} from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';

const meta: Meta<typeof UncontrolledRating> = {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

export default meta

type Story = StoryObj<typeof UncontrolledRating>;

export const RatingDemo: Story = {
    args: {
        value: 0
    }
}

