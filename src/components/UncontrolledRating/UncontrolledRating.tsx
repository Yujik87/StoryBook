import React, {useState} from 'react';


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('Rating rendering')

    let [val, setVal] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star
                selected={val > 0}
                selectFunction={() => {
                    setVal(1);
                    props.onChange(1);
                }}/>
            <Star
                selected={val > 1}
                selectFunction={() => {
                    setVal(2);
                    props.onChange(2)
                }}/>
            <Star
                selected={val > 2}
                selectFunction={() => {
                    setVal(3);
                    props.onChange(3);
                }}/>
            <Star
                selected={val > 3}
                selectFunction={() => {
                    setVal(4);
                    props.onChange(4)
                }}/>
            <Star
                selected={val > 4}
                selectFunction={() => {
                    setVal(5);
                    props.onChange(5)
                }}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    selectFunction: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return <span onClick={() => props.selectFunction()}>
        {(props.selected) ? <b> star </b> : ' star '}
    </span>

}