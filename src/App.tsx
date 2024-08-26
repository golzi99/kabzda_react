import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {OnOff} from './components/onoff/OnOff';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';


function App() {

    const [onOffState, setOnOffState] =  useState(false)

    const onClickOnOff = () => {
        setOnOffState(!onOffState)
    }

    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <UncontrolledAccordion title={"Menu"}/>
            <Accordion title={"Users"} collapsed/>
            <UncontrolledRating value={0}/>
            <Rating value={4}/>
            <OnOff onOffState={onOffState} setOnOffState={onClickOnOff}></OnOff>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <>{props.title}</>
    )
}

export default App;
