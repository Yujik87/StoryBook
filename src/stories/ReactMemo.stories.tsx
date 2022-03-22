import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Rendered')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima, Valera, Artem'])
    const addUsers = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()]);
    }

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUsers}>Add users</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}