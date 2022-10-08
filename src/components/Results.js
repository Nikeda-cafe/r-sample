
const Results = (props) => {
    const {country, cityName, temperature, conditionText, icon} = props.results;
    return (
        <>
            {country && <div>{country}</div>}
            {cityName && <div>{cityName}</div>}
            {temperature && <div>{temperature}</div>}
            {
                conditionText && 
                <div>
                    <img src={icon} />
                    <span>{conditionText}</span>
                </div>
            }
        </>
    )
}

export default Results;