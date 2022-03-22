import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo demo',
}

export const Example1 = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i=1; i<=a; i++) {
            let fake =0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a])



    for (let i=1; i<=b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result A: {resultA}
        </div>
        <div>
            Result B: {resultB}
        </div>
    </>
}

