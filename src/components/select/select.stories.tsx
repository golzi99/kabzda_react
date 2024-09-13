import React, {useState} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {ItemsType, Select} from './Select';

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    argTypes: {
        onChange: { action: 'changed' },
    },
}

export default meta

type Story = StoryObj<typeof Select>;

export const SelectComponent = () => {
    const [value, setValue] = useState<any>(0)

    const changeValue = (val: any) => {
        setValue(val)
    }

    const items: Array<ItemsType> =  [
        {title: 'Moscow', value: 1},
        {title: 'Tomsk', value: 2},
        {title: 'Novgorod', value: 3},
        {title: 'Minsk', value: 4}
    ]

    return <Select value={value} onChange={changeValue} items={items}/>
}


