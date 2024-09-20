import React from 'react'
import { CalcContext } from '../context/CalcContext'
import { useContext } from 'react'
// import { Textfit } from 'react-textfit';

const Screen = () => {
    const { calc } = useContext(CalcContext)
    return (
        <p className="screen" max={70} mode="single">{calc.num ? calc.num : calc.res}</p>
    )
}

export default Screen