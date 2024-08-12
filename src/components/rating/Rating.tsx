import React from "react";

type RatingPropsType = {
    value: number
}

export const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return (
            <div>
                <Star selected/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        )
    }
    else if (props.value === 2) {
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        )
    }
    else if (props.value === 3) {
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star/>
                <Star/>
            </div>
        )
    }
    else if (props.value === 4) {
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star/>
            </div>
        )
    }
    else if (props.value === 5) {
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected/>
            </div>
        )
    }
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

type StarPropsType = {
    selected?: boolean
}

const Star = (props: StarPropsType) => {
    return (
        <span>
            {props.selected ? <b>star </b> : <>star </>}
        </span>
    )
}