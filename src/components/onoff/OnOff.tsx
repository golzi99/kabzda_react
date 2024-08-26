import React from 'react';

type OnOffProps = {
    onOffState: boolean,
    setOnOffState: () => void
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

    const onClickOn = () => {
        if (!onOffState) {
            setOnOffState()
        }
    }

    const onClickOff = () => {
        if (onOffState) {
            setOnOffState()
        }
    }


    return (
        <div>
            <button style={onStyle} onClick={onClickOn}>On</button>
            <button style={offStyle} onClick={onClickOff}>Off</button>
            <div style={indicatorStyle}/>
        </div>
    );
};