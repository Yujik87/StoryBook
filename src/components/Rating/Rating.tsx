import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={props.value > 0} selectFunction={props.onClick} value={1}/>
            <Star selected={props.value > 1} selectFunction={props.onClick} value={2}/>
            <Star selected={props.value > 2} selectFunction={props.onClick} value={3}/>
            <Star selected={props.value > 3} selectFunction={props.onClick} value={4}/>
            <Star selected={props.value > 4} selectFunction={props.onClick} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    selectFunction: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={() => props.selectFunction(props.value)}>
        {(props.selected) ? <b> star </b> : ' star '}
    </span>

}