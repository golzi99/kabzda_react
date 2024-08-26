import React, {useState} from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {

    const [rating, setRating] = useState(props.value)

    const onStarClick = (rating: 0 | 1 | 2 | 3 | 4 | 5) => {
        setRating(rating)
    }

    return (
        <div>
            <Star selected={rating > 0} onClick={() => onStarClick(1)}/>
            <Star selected={rating > 1} onClick={() => onStarClick(2)}/>
            <Star selected={rating > 2} onClick={() => onStarClick(3)}/>
            <Star selected={rating > 3} onClick={() => onStarClick(4)}/>
            <Star selected={rating > 4} onClick={() => onStarClick(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected?: boolean,
    onClick?: () => void
}

const Star = (props: StarPropsType) => {
    return (
        <span onClick={props.onClick} style={{cursor: 'pointer'}}>
            {props.selected ? <b>star </b> : <>star </>}
        </span>
    )
}