export default function KillCounter(props) {
    let title = 'No Kills!'

    // Conditional rendering with if statements
    if (props.count < 0) {
        //return <h3>Stop Killing Your Allies!</h3>
        title = 'Stop Killing Your Allies!';
    } else if (props.count == 1) {
        //return <h3>First Blood!</h3>;
        title = 'First Blood!';
    } else if (props.count == 2) {
        //return <h3>Double Kill!</h3>
        title = 'Double Kill!';
    } else if (props.count == 3) {
        //return <h3>Tripple Kill!</h3>
        title = 'Tripple Kill!';
    } else if (props.count == 4) {
        //return <h3>Quadra Kill!</h3>
        title = 'Quadra Kill!';
    } else if (props.count >= 5 && props.count <= 9) {
        //return <h3>Killing Spree!</h3>
        title = 'Killing Spree!';
    } else if (props.count == 10) {
        //return <h3>Godlike!</h3>
        title = 'Godlike!'
    }

    return <h3>{title}</h3>

    //{props.count == 3 ? <h3>Tripple Kill!</h3> : <h3>{title}</h3>}     -> Another example of Conditional Rendering
}