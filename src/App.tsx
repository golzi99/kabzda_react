import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {OnOff} from './components/onoff/OnOff';
import {Rating} from './components/rating/Rating';
import {Accordion, ItemsType} from './components/accordion/Accordion';
import {UncontrolledOnOff} from './components/onoff/UncontrolledOnOff';


export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValue>(0)

    const [collapsedAccordion, setCollapsedAccordion] = useState(false)

    const [onOffState, setOnOffState] =  useState(false)
    const [switchOn, setSwitchOn] = useState(false)

    const items: Array<ItemsType> = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
    ]



    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <UncontrolledAccordion title={"Menu"}/>
            <Accordion title={"Users"}
                       items={items}
                       collapsed={collapsedAccordion}
                       setCollapsedAccordion={() => {setCollapsedAccordion(!collapsedAccordion)}}
                       onClick={() => {}}
            />
            <UncontrolledRating value={0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>
            {switchOn.toString()}
            <OnOff onOffState={onOffState} setOnOffState={setOnOffState}></OnOff>
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
