import './CalculatorButton.css';

export default function CalculatorButton(props) {
    let buttonClass = 'calculator-button';
    let operations = ['+', '-', '*', '/'];

    if (operations.includes(props.value)) {
        buttonClass += '-operation';
    } else if (props.value === '=') {
        buttonClass += '-calculate';
    } else if (props.value === 0) {
        buttonClass += '-zero';
    } else if (props.value === 'Clear') {
        buttonClass += '-clear';
    }

    function handleClick() {
        props.onClick(props.value);
    };

    return (
        <button className={buttonClass} onClick={handleClick}>{props.value}</button>
    );
}