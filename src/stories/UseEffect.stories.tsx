import {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const Example2 = () => {
    console.log('Example2')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        })
    }, [])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={() => setFake(fake + 1)}>+</button>
            {fake}
        </>
    )
}

export const ExampleSetTimeOut = () => {
    console.log('ExampleSetTimeOut')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            Counter = {counter}
            Fake = {fake}
        </>
    )
}

export const Clock = () => {

    let currentTime = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(currentTime)

    useEffect(() => {
        setInterval(() => {
            currentTime = new Date().toLocaleTimeString()
            setClock(currentTime)
        }, 1000)
    }, [])

    return (
        <>
            <time>
                {clock}
            </time>
        </>
    )
}