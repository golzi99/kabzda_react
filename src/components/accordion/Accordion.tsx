import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)

    const onTitleClick = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title} onTitleClick={onTitleClick}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onTitleClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.onTitleClick}>{props.title}</h3>
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

