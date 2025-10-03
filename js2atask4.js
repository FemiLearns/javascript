function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > balance) {
            return "Insufficient funds";
        } else {
            balance -= amount;
            return `Withdrawal successful. New balance: $${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `Deposit successful. New balance: $${balance}`;
    } else if (action === "withdraw" && amount >= 500) {
        return "Withdrawal limit exceeded";
    }
}

console.log(atm(3000000, "withdraw", 200000));
console.log(atm(3000000, "deposit", 500000));
console.log(atm(3000000, "withdraw", 600000));