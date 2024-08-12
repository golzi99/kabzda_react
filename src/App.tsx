import React from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';

function App() {
  return (
    <div className="App">
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
    </div>
  );
}

const AppTitle = () => {
    return (
        <>This is APP component</>
    )
}

const Rating = () => {
  return (
      <div>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
      </div>
  )
}

const Star = () => {
    return (
        <div>star</div>
    )
}

export default App;
