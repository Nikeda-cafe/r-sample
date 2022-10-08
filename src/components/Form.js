
const Form = (props)=> {
    
    return (
        <form>
            <input type="text" name="city" onChange={e => props.setCity(e.target.value)}/>
            
            <button onClick={props.getWeather}>Get Weather</button>
        </form>
    );
}

export default Form