import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const onTitleClick = () => {
        dispatch({
            type: TOGGLE_COLLAPSED,
        })
    }

    return (
        <div>
            <AccordionTitle title={props.title} onTitleClick={onTitleClick}/>
            {!state.collapsed && <AccordionBody/>}
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

