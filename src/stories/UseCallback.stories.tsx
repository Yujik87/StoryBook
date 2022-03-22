import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'UseCallback demo',
}

type BookSecretType = {
    books?: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
    console.log('BooksSecret rendered')
    return <div>
        <button onClick={() => props.addBook()}>Add book</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    </div>
}

const Books = React.memo(BooksSecret);

export const LikeUseCallback = () => {
    console.log('LikeUseCallback rendered')

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'HTML', 'CSS'])

    /*const addBook = () => {
        console.log(books)
        setBooks([...books, 'Angular' + new Date().getTime()]);
    }*/

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, 'Angular' + new Date().getTime()]);
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            setBooks([...books, 'Angular' + new Date().getTime()]);
    }, [books])

   /* const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])*/

    return <>
        <button onClick={() => setCounter(counter + 1)}>Count +</button>

        {counter}
        <Books addBook={memoizedAddBook}/>
        <Books addBook={memoizedAddBook2}/>
    </>
}