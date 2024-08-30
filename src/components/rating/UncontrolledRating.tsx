import React, {useState} from 'react';
import {RatingValue} from '../../App';

type RatingPropsType = {
    value: RatingValue
}

export const UncontrolledRating = (props: RatingPropsType) => {

    const [rating, setRating] = useState(props.value)



    return (
        <div>
            <Star selected={rating > 0} setRating={setRating} value={1}/>
            <Star selected={rating > 1} setRating={setRating} value={2}/>
            <Star selected={rating > 2} setRating={setRating} value={3}/>
            <Star selected={rating > 3} setRating={setRating} value={4}/>
            <Star selected={rating > 4} setRating={setRating} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected?: boolean,
    value: RatingValue
    setRating: (value: RatingValue) => void
}

const Star = (props: StarPropsType) => {

    const onStarClickHandler = () => {
        props.setRating(props.value)
    }

    return (
        <span onClick={onStarClickHandler} style={{cursor: 'pointer'}}>
            {props.selected ? <b>star </b> : <>star </>}
        </span>
    )
}