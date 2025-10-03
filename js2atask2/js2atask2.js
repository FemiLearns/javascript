function calculatePrice(price, customerType, isFirsstPurchase) {
    let discount = 0;
    let Student = 0.10
    let Senior = 0.15
    let Employee = 0.20
    

    if (customerType === Student) {
        discount += 0.10;
        discountPrice = price * discount/100;
        finalPrice = price - (price * discount / 100);
        finalPrice.toFixed(2);
        return `Original Price: $${price}, Discount Price: ${discountPrice}, Final Price: $${finalPrice.toFixed(2)}`;

    }
    else if (customerType === Senior) {
        discount += 0.15;
        discountPrice = price * discount/100;
        finalPrice = price - (price * discount / 100);
        finalPrice.toFixed(2);
        return `Original Price: $${price}, Discount Price: ${discountPrice}, Final Price: $${finalPrice.toFixed(2)}`;
    }  
    else if (customerType === Employee) {
        discount += 0.20;
        discountPrice = price * discount/100;
        finalPrice = price - (price * discount / 100);
        finalPrice.toFixed(2);
        return `Original Price: $${price}, Discount Price: ${discountPrice}, Final Price: $${finalPrice.toFixed(2)}`;
    }
    if (isFirsstPurchase) {
        discount += 0.05;
        discountPrice = price * discount/100;
        finalPrice = price - (price * discount / 100);
        finalPrice.toFixed(2);
        return `Original Price: $${price}, Discount Price: ${discountPrice}, Final Price: $${finalPrice.toFixed(2)}`;
    }   
   

    
} 

console.log(calculatePrice(100, "Student", true));
console.log(calculatePrice(200, "Senior", false));
console.log(calculatePrice(150, "Employee", true));
console.log(calculatePrice(250, "Regular", false));

