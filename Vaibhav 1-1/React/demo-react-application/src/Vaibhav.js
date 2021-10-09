import './Vaibhav.css';

/* Functional Component */

function Vaibhav() {
    let a = 10;
    let b = 20;
    return (
        <div className="main-class">
            BoardInfinity
            <br />
            <span className="span-class">Vaibhav Tayade</span>
            <br />
            <span className="span-class">Sum Of Both Numbers : {a + b}</span>
        </div>
    );
}

export default Vaibhav;