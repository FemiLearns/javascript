function weatherAdvice(temperature, isRaining) {
    if (temperature < 32 && isRaining) {
        return "Freezing rain! Stay inside.";
    } else if (temperature < 32) {
        return "Very cold, wear a heavy coat.";
    } else if (temperature >=32 && temperature <= 60) {
        return "Chilly, bring a jacket.";
    } else if (temperature >= 60 && temperature <= 80) {
        return "Nice weather"
    } else if (temperature > 80){
        return "It's hot! Stay hydrated.";
    } else {isRaining? "Bring an umbrella." : "No umbrella needed.";}
        }    

    console.log(weatherAdvice(30, true)); 
    console.log(weatherAdvice(45, false));
    console.log(weatherAdvice(70, true)); 
    console.log(weatherAdvice(85, false)); 
    console.log(weatherAdvice(90, true));