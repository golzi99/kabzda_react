import {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateDate() {
    console.log('generate data')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(generateDate)

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    )
}