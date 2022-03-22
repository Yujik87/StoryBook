import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input'
};

export const UncontrolledInput = () => <input />

export const FixedControlledInput = () => <input value={'it-incubator.by'}/>

export const TrackedValueOfUncontrolledInput = () => {
   const [val,setVal] = useState('');
   const onChangeFunction = (e: ChangeEvent<HTMLInputElement>)=> {
       setVal(e.currentTarget.value)
   }
    return <><input onChange={onChangeFunction} /> - {val}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [val, setVal] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const actualValue = inputRef.current as HTMLInputElement;
        setVal(actualValue.value);
    }
    return <div><input ref={inputRef}/> <button onClick={save}> save </button>actual value is - {val} </div>;
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangeChecker = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeChecker} />
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChangeChecker = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChangeChecker} />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');
    const onChangeChecker = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeChecker}>
        <option>none</option>
        <option value="1">Kiev</option>
        <option value="2">Moscow</option>
        <option value="3">Minsk</option>
    </select>
}















