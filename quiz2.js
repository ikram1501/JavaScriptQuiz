let products = [
    {id: 1, name: 'Product A', price: 1000, points: 10},
    {id: 2, name: 'Product B', price: 2000, points: 25},
    {id: 3, name: 'Product C', price: 5000, points: 50},
    {id: 4, name: 'Product D', price: 8000, points: 100},
];

let availablePoints = 150;
let purchasedProducts = [];
let totalSpent = 0;

// 1. Fungsi maxPoin
function maxPoin() {
    let maxPointsProduct = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].points > maxPointsProduct.points) {
            maxPointsProduct = products[i];
        }
    }
    return maxPointsProduct;
}


// 2. Fungsi poinSisa
function poinSisa() {
    let maxPointsProduct = maxPoin();
    return availablePoints - maxPointsProduct.points;
}

// 3. Fungsi buyProduct
function buyProduct() {
    products.sort((a, b) => b.points - a.points);

    for (let product of products) {
        if (availablePoints >= product.points) {
            purchasedProducts.push(product);
            totalSpent += product.price;
            availablePoints -= product.points;
        }
    }
    return {
        purchasedProducts: purchasedProducts,
        totalSpent: totalSpent
    };
}

console.log("------------------------");
console.log("Produk dengan poin tertinggi:", maxPoin());
console.log("------------------------");
console.log("Sisa poin setelah membeli produk dengan poin tertinggi:", poinSisa());
console.log("------------------------");
console.log("Produk yang dibeli dan total yang dihabiskan:", buyProduct());
console.log("------------------------");
