function personalAssistant(time, weather, dayType) {
    if (time < 6) {
        return "It's early! Get some rest.";
    } else if (time >= 6 && time < 12) {
        if (weather === "rainy") {
            return "Good morning! Don't forget your umbrella.";
        } else {
            return "Good morning! Have a great day ahead.";
        }
    } else if (time >= 12 && time < 18) {
        if (dayType === "workday") {
            return "Good afternoon! Time to focus on work.";
        } else {
            return "Good afternoon! Enjoy your leisure time.";
        }
    } else if (time >= 18 && time <= 23) {
        if (weather === "clear") {
            return "Good evening! Perfect time for a walk.";
        } else {
            return "Good evening! Stay cozy indoors.";
        }
    } else {
        return "Invalid time input.";
    }
}

console.log(personalAssistant(5, "clear", "workday"));
console.log(personalAssistant(9, "rainy", "workday"));
console.log(personalAssistant(14, "clear", "weekend"));
console.log(personalAssistant(19, "clear", "workday"));
console.log(personalAssistant(22, "cloudy", "weekend"));
console.log(personalAssistant(25, "clear", "workday")); 