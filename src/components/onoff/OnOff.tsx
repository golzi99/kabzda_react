import React from 'react';

type OnOffProps = {
    turnOn: boolean
}

export const OnOff = ({turnOn}: OnOffProps) => {
    return (
        <div>
            {turnOn ?
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button style={{backgroundColor: 'green'}}>On</button>
                    <button>Off</button>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: 'green',
                        width: '20px',
                        height: '20px',
                        marginLeft: '5px'
                    }}/>
                </div> :
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button>On</button>
                    <button style={{backgroundColor: 'red'}}>Off</button>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        width: '20px',
                        height: '20px',
                        marginLeft: '5px'
                    }}/>
                </div>
            }
        </div>


    );
};