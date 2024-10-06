import {useEffect, useState} from 'react';

type Props = {

}

export const Clock = ({}: Props) => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            <time>
                {clock}
            </time>
        </>
    )
}

export const Clock2 = ({}: Props) => {

    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const refactorTime = (time: number) => {
        return time < 10 ? '0' + time : time
    }

    return (
        <>
            <span>{refactorTime(clock.getHours())}</span>:
            <span>{refactorTime(clock.getMinutes())}</span>:
            <span>{refactorTime(clock.getSeconds())}</span>
        </>
    )
}