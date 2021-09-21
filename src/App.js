import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import { useState } from 'react';

function App() {
    const [state, setState] = useState({idname:undefined})

    useEffect(() => {
        (async () => {
            window.setTimeout( // 5秒後に setState を呼び出す
                setState,
                5*1000,
                {idname:{id:10, name:"name"}} // これを渡している
            )
        })()
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <RenderNumber number={state.idname?.id}></RenderNumber>
            </header>
        </div>
    );
}

function RenderNumber(props){
    const number = props.number

    return (<>
        <button variant="contained" color="primary" onClick={()=>onclick(number)}>button</button>
    </>)
}

function onclick(num) {
    window.alert("number : " + num)
}


export default App;
