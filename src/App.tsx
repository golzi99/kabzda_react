import React from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {Rating} from "./components/rating/Rating";

function App() {
  return (
    <div className="App">
        <PageTitle title={"This is APP component"}/>
        <Rating value={3}/>
        <Accordion title={"Menu"} />
        <Accordion title={"Users"} collapsed/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
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
