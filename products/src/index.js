import { faker } from '@faker-js/faker'; // Correct import

let products = '';

for (let i = 0; i < 5; i++) {
    // Correct method to generate a product name
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.querySelector("#dev-product").innerHTML = products;
