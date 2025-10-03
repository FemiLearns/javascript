function isStrongPassword(password) {
        if (password.length < 8) {
        return false;
    }
        else if (!/[A-Z]/.test(password)) {
        return false;
    }
        else if (typeof password != 'number'){
        return false;
    }
}

function formatPercentage(value) {
    if (value >= 0) {
        return value.toFixed(1) + "%";
    }
    else if (value <= 100) {
        return value.toFixed(1) + "%";
    }
}

function calculateCompoundInterest(principal, rate, years) {
    let amount = principal * (1 + rate / 100) ** years;
    return amount.toFixed(2);
}

function canGraduate(credits, gpa) {
    if (credits >= 120 && gpa >= 2.0) {
        return true;
    } else {
        return false;
    }
}

function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ").toUpperCase();
}

console.log(isStrongPassword('124g5th'))
console.log(formatPercentage(20.9876))
console.log(calculateCompoundInterest(1000, 5, 10))
console.log(canGraduate(130, 3.5))
console.log(reverseWords("My name is Olufemi Awoyale"))