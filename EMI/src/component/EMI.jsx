import React, { useState } from 'react'

const EMI = () => {
    const [principle, setPrinciple] = useState();
    const [interest, setInterest] = useState();
    const [year, setYear] = useState();
    const [result, setResult] = useState();

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'principle') {
            setPrinciple(value);
        }
        else if (name === "interest") {
            setInterest(value);
        } else if (name === "year") {
            setYear(value);
        }

    }
    const calculateEmi = () => {
        if (principle && interest && year) {
            const p = parseFloat(principle);
            const r = parseFloat(interest/12/100);
            const n = parseFloat(year*12);
            const powerCal = Math.pow(1 + r, n);
            let emi = p * (r * powerCal) / (powerCal - 1);
            setResult(Math.round(emi));
        }
        else {
            alert('Please fill all details!');
    }

    }
    return (
        <div className='container'>

            <h1>EMI Calculator</h1>

            <div>
                <label>Amount</label>
                <input type="text" placeholder='Amount' name='principle'onChange={handleInput} />
            </div>
            <div>
                <label>Interest</label>
                <input type="text" placeholder='Interest' name='interest' onChange={handleInput}/>
            </div>
            <div>
                <label>Year</label>
                <input type="text" placeholder='Year' name='year' onChange={handleInput}/>
            </div>

            <button onClick={calculateEmi}>Calculate EMI</button>

            <div className='result'>
                <p>EMI Result : {result}</p>
            </div>

        </div>
    )
}
export default EMI