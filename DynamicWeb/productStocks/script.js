const products = [
    { product: "Laptop", stock: 15 },
    { product: "Smartphone", stock: 30 },
    { product: "Headphones", stock: 0 },
    { product: "Monitor", stock: 10 },
    { product: "Keyboard", stock: 0 }
  ];
function checkStockLevels(products){
    for(const prod of products){
        if (!prod.stock){
            console.log(`${prod.product} is out of stock`)
        }
        else{
            console.log(`${prod.product} is in stock`)
        }
    }
}

checkStockLevels(products);