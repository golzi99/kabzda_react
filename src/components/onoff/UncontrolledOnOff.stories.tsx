import {Meta, StoryObj} from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';

const meta: Meta<typeof UncontrolledOnOff> = {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export default meta

type Story = StoryObj<typeof UncontrolledOnOff>

export const UncontrolledOnOffDemo: Story = {
    args: {
        onChange: () => {}
    }
}