const initState = {
    weatherData: [
        //Dummy data
        {id:'1', zip:'07666', description:'clear skys', temp: '28', feelsLikeid:'15'},
        {id:'2',zip:'10034', description: 'Snowing', temp: '25', feelsLikeid:'14'},
        {id:'3',zip:'90210', description: 'sunny', temp: '70', feelsLikeid:'Cambridge'},
    ]
}

const rootReducer = ( state = initState, action) =>{
    return state;
}

export default rootReducer;
