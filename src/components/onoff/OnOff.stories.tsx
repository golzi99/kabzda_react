import {Meta, StoryObj} from '@storybook/react';
import {OnOff, OnOffProps} from './OnOff';
import {useState} from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof OnOff> = {
    title: 'OnOff',
    component: OnOff
}

export default meta

type Story = StoryObj<typeof OnOff>

export const OnMode: Story = {
    args: {
        onOffState: true,
        setOnOffState: action('setOnOffState')
    }
}

export const OffMode: Story = {
    args: {
        onOffState: false,
        setOnOffState: action('setOnOffState')
    }
}

const ModeChangingComponent = (args: OnOffProps) => {
    const [mode, setMode] = useState(args.onOffState)
    return <OnOff onOffState={mode} setOnOffState={setMode}/>
}

export const ModeChanging: Story = {
    args: {
        onOffState: true,
    },
    render: (args) => <ModeChangingComponent {...args}/>
}