import React from 'react';

export type AccordionPropsType = {
    title: string
    collapsed: boolean,
    setCollapsedAccordion: () => void
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.setCollapsedAccordion}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 style={{cursor: 'pointer'}} onClick={props.onClick}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

