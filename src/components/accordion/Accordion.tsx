import React from 'react';

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean,
    setCollapsedAccordion: () => void,
    items: Array<ItemsType>,
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.setCollapsedAccordion}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void,
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 style={{cursor: 'pointer'}} onClick={props.onClick}>{props.title}</h3>
    )
}

export type AccordionBodyPropsType = {
    items: Array<ItemsType>,
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((item) => <li key={item.value} onClick={() => {props.onClick(item.value)}}>{item.title}</li>)}
        </ul>
    )
}

