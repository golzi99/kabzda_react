import React, {useState} from 'react';

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: Array<ItemsType>
}

export const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(false)

    const onClickCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const selectItem = (value: any) => {
        props.onChange(value)
        onClickCollapsed()
    }

    const title = props.items.find(i => i.value === props.value)?.title

    return (
        <div>
            <div>
                {title}
                <button onClick={onClickCollapsed}>\/</button>
            </div>
            {collapsed && props.items.map(item =>
                <ul>
                    <li key={item.value} onClick={() => selectItem(item.value)}>
                        {item.title}
                    </li>
                </ul>

                )
            }
        </div>
    );
};