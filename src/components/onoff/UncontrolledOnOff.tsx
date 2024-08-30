import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    const [turnOnOrOff, setTurnOnOrOff] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: turnOnOrOff ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: turnOnOrOff ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: "50%",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: turnOnOrOff ? 'green' : 'red'
    }

    const onClicked = () => {
        setTurnOnOrOff(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setTurnOnOrOff(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>On</button>
            <button style={offStyle} onClick={offClicked}>Off</button>
            <div style={indicatorStyle}/>
        </div>
    );
};