import React from'react'

export default function Calculator(){
    const num1=20
    const num2=4
    const Calculate = (op) =>{
        let c = `${num1} ${op} ${num2}`
        let r = eval(c) //การตรวจสอบค่าในตัวแปร
        alert (`${c} = ${result}`)
    }
    return(
        <div>
            <span>{num1}</span>
            <button onClick={() =>Calculate('+')}> + </button>
            <button onClick={() =>Calculate('-')}> - </button>

            <span>{num2}</span>
        </div>
    )
}