import {Accordion, AccordionPropsType} from './Accordion';
import React, {useState} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        setCollapsedAccordion: { action: 'collapsed state changed' },
    },
}

export default meta

type Story = StoryObj<typeof Accordion>;

const AccordionDemoComponent = (args: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(args.collapsed);

    return (
        <Accordion
            {...args}
            collapsed={collapsed}
            setCollapsedAccordion={() => setCollapsed(!collapsed)}
        />
    );
};

export const Collapsed: Story = {
    args: {
        title: 'Accordion Collapsed',
        collapsed: true,
        setCollapsedAccordion: action('set collapsed state')
    }
};

export const Expanded: Story = {
    args: {
        title: 'Accordion Expanded',
        collapsed: false,
        setCollapsedAccordion: action('set collapsed state')
    }
};

export const AccordionDemo: Story = {
    args: {
        title: 'Accordion Expanded',
        collapsed: false
    },
    render: (args) => <AccordionDemoComponent {...args}/>
}