import React from 'react';
import {RatingValue} from '../../App';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
    onClick: (value: RatingValue) => void
}

export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} onClick={() => {props.onClick(1)}}/>
            <Star selected={props.value > 1} onClick={() => {props.onClick(2)}}/>
            <Star selected={props.value > 2} onClick={() => {props.onClick(3)}}/>
            <Star selected={props.value > 3} onClick={() => {props.onClick(4)}}/>
            <Star selected={props.value > 4} onClick={() => {props.onClick(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected?: boolean,
    onClick: () => void
}

const Star = (props: StarPropsType) => {
    return (
        <span onClick={props.onClick} style={{cursor: 'pointer'}}>
            {props.selected ? <b>star </b> : <>star </>}
        </span>
    )
}