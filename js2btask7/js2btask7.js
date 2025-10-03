function productCalculator() {
    let productName = prompt("Enter the product name:");
    let pricePerUnit = parseFloat(prompt("Enter the price per unit:"));
    let quantity = parseInt(prompt("Enter the quantity:"));
    let discountPercentage = parseFloat(prompt("Enter the discount percentage (0-100):"));

    if (isNaN(pricePerUnit) || isNaN(quantity) || isNaN(discountPercentage) ||
        pricePerUnit < 0 || quantity < 0 || discountPercentage < 0 || discountPercentage > 100) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let totalPrice = pricePerUnit * quantity;
    let discountAmount = (discountPercentage / 100) * totalPrice;
    let finalPrice = totalPrice - discountAmount;


    function taxCalculator(amount) {
        let taxRateNigeria = 0.07;
        let taxRateGhana = 0.05;
        let taxRateKenya = 0.10;
        let taxRateSouthAfrica = 0.15;

        let taxNigeria = amount * taxRateNigeria;
        let taxGhana = amount * taxRateGhana;
        let taxKenya = amount * taxRateKenya;
        let taxSouthAfrica = amount * taxRateSouthAfrica;
        return {
            Nigeria: taxNigeria,
            Ghana: taxGhana,
            Kenya: taxKenya,
            SouthAfrica: taxSouthAfrica
        };
    }
    let taxes = taxCalculator(finalPrice);

    let result = `Product Name: ${productName}
    Price per Unit: $${pricePerUnit.toFixed(2)}
    Quantity: ${quantity}
    Total Price (before discount): $${totalPrice.toFixed(2)}
    Discount Percentage: ${discountPercentage}%
    Discount Amount: $${discountAmount.toFixed(2)}
    Final Price (after discount): $${finalPrice.toFixed(2)}`;

    result += `\n\nTaxes on Final Price:
    - Nigeria (7%): $${taxes.Nigeria.toFixed(2)}
    - Ghana (5%): $${taxes.Ghana.toFixed(2)}
    - Kenya (10%): $${taxes.Kenya.toFixed(2)}
    - South Africa (15%): $${taxes.SouthAfrica.toFixed(2)}`;

    alert(result);
    console.log(productCalculator());
}

productCalculator();

    let weight = parseFloat(prompt("Enter the weight of the package (in kg):"));
    let distance = parseFloat(prompt("Enter the distance to be shipped (in km):"));
    let isMember = confirm("Are you a member? Click 'OK' for Yes and 'Cancel' for No.");
    let shippingCost = weight * distance;

    shippingcalculator()

function shippingcalculator() {
       

    if (isMember) {
        alert(shippingCost * 0.10); 
        let receipt = `Shipping Receipt:
            Weight: ${weight} kg
            Distance: ${distance} km
            Base Shipping Cost: $${shippingCost.toFixed(2)}
            Membership Discount Applied: ${isMember}
            Final Shipping Cost: $${shippingCost.toFixed(2)}`;
    alert(receipt);
    }else{
        alert(shippingCost);
    }
    
    

}
