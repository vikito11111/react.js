import { useState } from "react";

import CalculatorButton from "./CalculatorButton";

import './CalculatorButton.css';

export default function Calculator() {
    const [input, setInput] = useState('');
    const [isError, setIsError] = useState(false);

    const operators = ['+', '-', '*', '/'];

    function handleButtonClick(value) {
        if (isError) {
            setInput('');
            setIsError(false);
        }

        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error!');
                setIsError(true);
            }
        } else if (value === 'Clear') {
            setInput('');
        } else {
            setInput((oldValue) => {
                if (operators.includes(value)) {
                    if (operators.includes(oldValue.trim().slice(-1))) {
                        return oldValue.slice(0, -2) + ` ${value} `;
                    } else {
                        return oldValue + ` ${value} `;
                    }
                } else {
                    return oldValue + value;
                }
            })
        }
    };

    return (
        <div className="calculator-container">
            <div className="display-result">{input}</div>

            <div className="calculate">
                <CalculatorButton value="=" onClick={handleButtonClick} />
            </div>

            <div className="operations">
                {(() => {
                    const operationsButtons = [];

                    const operations = ['+', '-', '*', '/'];

                    for (let i = 0; i < operations.length; i += 2) {
                        const row = [];

                        for (let j = i; j < i + 2 && j < operations.length; j++) {
                            row.push(
                                <CalculatorButton key={operations[j]} value={operations[j]} onClick={handleButtonClick} />
                            );
                        }

                        operationsButtons.push(
                            <div key={i} className="button-row">
                                {row}
                            </div>
                        );
                    }

                    return operationsButtons;
                })()}
            </div>

            <div className="numbers">
                {(() => {
                    const buttons = [];

                    for (let i = 1; i < 10; i += 3) {
                        const row = [];

                        for (let j = i; j < i + 3 && j < 10; j++) {
                            row.push(
                                <CalculatorButton key={j} value={j} onClick={handleButtonClick} />
                            );
                        }

                        buttons.push(
                            <div key={i} className="button-row">
                                {row}
                            </div>
                        );
                    }

                    return buttons;
                })()}

                <div className="bottom-row">
                    <CalculatorButton key={0} value={0} onClick={handleButtonClick} className="zero" />
                </div>
            </div>
            
            <div className="clear">
                <CalculatorButton value="Clear" onClick={handleButtonClick} />
            </div>
        </div>
    );
}