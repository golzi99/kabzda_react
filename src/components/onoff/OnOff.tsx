import React from 'react';

export type OnOffProps = {
    onOffState: boolean,
    setOnOffState: (stateOnOff: boolean) => void
}

export const OnOff = ({onOffState, setOnOffState}: OnOffProps) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: onOffState ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: onOffState ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: "50%",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onOffState ? 'green' : 'red'
    }

    return (
        <div>
            <button style={onStyle} onClick={() => setOnOffState(true)}>On</button>
            <button style={offStyle} onClick={() => setOnOffState(false)}>Off</button>
            <div style={indicatorStyle}/>
        </div>
    );
};