import './App.css';
import {useEffect, useState} from 'react';


function App() {
    return <Board width={4} height={4}></Board>
}

function Board( value ) {
    let content = [];

    for (let i = 0; i < value.width; i++) {
        content.push(<div></div>)
        for (let i = 0; i < value.height; i++) {
            content.push(<Square></Square>)
        }
    }

    return content
}

function Square() {
    const [value, setValue]  = useState("")

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let num = randomNumberInRange(1, 5)

            if (num === 2) {
                setValue("X")
            } else {
                setValue("")
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return <button>{value}</button>
}

export default App;
