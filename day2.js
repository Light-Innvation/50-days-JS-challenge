function toCelcuis(celcuis){
    return( celcuis * 9/5) +32;
}
let celcuisTemperature = 25;
let fahrenheit = toCelcuis(celcuisTemperature);
console.log(`${celcuisTemperature} degress Celuis is ${fahrenheit}`  );