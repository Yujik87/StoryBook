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
        setInterval(() => {
            console.log('tick: ' + counter) //берёт из замыкания один раз и больше не обновляет значение, потому всегда "1"
            setCounter(state => state + 1)
        }, 1000)
    }, [])



    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>Counter+</button>*/}
    </>
}
