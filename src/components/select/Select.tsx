import React, {useEffect, useState} from 'react';
import s from './select.module.css'

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
    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoverElementValue] = useState(props.value)

    const toggleItems = () => setActive(!active)

    const selectItem = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    useEffect(() => {
        setHoverElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoverElementValue)

    const onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverElementValue) {
                    const pretendentElement = event.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem)
                props.onChange(props.items[0].value)
        }
        if (event.key === 'Enter' || event.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                <div className={s.selectList}>
                    {active && props.items.map(item =>
                        <div className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                             onMouseEnter={() => setHoverElementValue(item.value)}
                             key={item.value}
                             onClick={() => selectItem(item.value)}
                        >
                            {item.title}
                        </div>
                    )
                    }
                </div>
            </div>
        </>

    );
};