import React from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {Rating} from "./components/rating/Rating";

// type MoneyType = {
//     banknots: string,
//     value: number,
//     number: string
// }
//
// type ButtonMoneyType = "all" | "rubles" | "dollars"

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


//    const [money, setMoney] = useState([
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ] as Array<MoneyType>)
//
//     const[filter, setFilter] = useState("all" as ButtonMoneyType)
//
//     let filtredMoney: Array<MoneyType> = money
//
//     if (filter === "rubles") {
//         filtredMoney = money.filter(typeMoney => typeMoney.banknots === "RUBLS")
//     } else if (filter === "dollars") {
//         filtredMoney = money.filter(typeMoney => typeMoney.banknots === "Dollars")
//     }
//
//     const onClickFilterMoneyHandler = (nameButton: ButtonMoneyType) => {
//         setFilter(nameButton)
//     }
//
//     return (
//         <div className="App">
//             <ul>
//                 {filtredMoney.map((obj, index) => {
//                     return (
//                         <li key={index}>
//                             <span> {obj.banknots}</span>
//                             <span> {obj.value}</span>
//                             <span> {obj.number}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <button onClick={() => onClickFilterMoneyHandler("all")}>all</button>
//             <button onClick={() => onClickFilterMoneyHandler("rubles")}>rubles</button>
//             <button onClick={() => onClickFilterMoneyHandler("dollars")}>dollars</button>


// const [money, setMoney] = useState([
//     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
// ] as Array<MoneyType>)
//
// const[filter, setFilter] = useState("all" as ButtonMoneyType)
//
// let filtredMoney: Array<MoneyType> = money
//
// if (filter === "rubles") {
//     filtredMoney = money.filter(typeMoney => typeMoney.banknots === "RUBLS")
// } else if (filter === "dollars") {
//     filtredMoney = money.filter(typeMoney => typeMoney.banknots === "Dollars")
// }
//
// const onClickFilterMoneyHandler = (nameButton: ButtonMoneyType) => {
//     setFilter(nameButton)
//}