import './App.css'

function Form(props){
    const {a, b, hanldeClick} = props;
    return (
    <>
        <div class="card">
        a = <input type="text" onChange={hanldeClick}/>
        <p>b= {b}</p>
        </div>
    </>
    )
}

export default Form 