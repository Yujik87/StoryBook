import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect demo',
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount');
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    },[counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetTimeoutExample1 = () => {
    console.log('SetTimeoutExample1')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString();
        }, 1000)
    }, [counter])



    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}
