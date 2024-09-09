import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

export default meta

type Story = StoryObj<typeof UncontrolledAccordion>;

export const UncontrolledAccordionDemo: Story = {
    args: {
        title: 'UncontrolledAccordion',
    }
};
