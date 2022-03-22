import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo demo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
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


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret rendered')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo rendered')

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima, Valera, Artem'])

    const addUsers = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()]);
    }

    const newArray = useMemo( () => {
        return users.filter( u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>Count +</button>
        <button onClick={() => addUsers()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}




