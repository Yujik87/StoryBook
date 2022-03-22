import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'UseState demo',
}

function generateData() {
    console.log('generate data');
    return 12348948723479;

}

export const UseStateExample = () => {
    console.log('UseState rendered')

    //const initValue = useMemo(generateData,[]);

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => {
        return state + 1;
    }

    return <>
        {/*<button onClick={() => setCounter(changer)}>Count +</button>*/}
        <button onClick={() => setCounter(state => state + 1)}>Count +</button>

        {counter}
    </>
}