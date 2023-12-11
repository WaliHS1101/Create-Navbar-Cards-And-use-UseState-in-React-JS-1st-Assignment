import { useState } from "react";

function Test1() {
    const [Counter, setCounter] = useState(0);
    function Inc() {
        setCounter(Counter + 1)
    }
    function Dec() {
        setCounter(Counter - 1)
    }
    return (
        <center>
            <h1>Counter : {Counter} </h1>
            <button className="btn btn-success" onClick={Inc}>Add</button>
            <buton className="btn btn-danger" onClick={Dec}>Remove</buton>
        </center>
    )
}

function Test2() {
    const [txt, settxt] = useState("Change Me")
    return (
        <center>

            <h1>{txt}</h1>
            <input type="text" onChange={(e) => { settxt(e.target.value) }} />
        </center>
    )
}

export { Test1, Test2 };