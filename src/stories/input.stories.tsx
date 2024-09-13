import {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
};

export const UnControlledInput = () => {
    return (
        <>
            <input/>
        </>
    )
}
export const TraceValueUnControlledInput = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <input value={value} onChange={(event) => setValue(event.currentTarget.value)}/>
            {value}
        </>
    )
}
export const InputWithRef = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
             - actual value: {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.value)

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked)

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={1}>Moscow</option>
            <option value={2}>Kiev</option>
            <option value={3}>Tomsk</option>
        </select>
    )
}
