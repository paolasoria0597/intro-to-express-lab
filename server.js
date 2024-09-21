
const express = require('express');
const app = express()

app.get("/greetings/:userName", (req, res) => { 
    console.log(req.params.userName); 
    res.send(`Hello there welcome ${req.params.userName}`)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get("/roll/:number" , (req,res) => {
    console.log('req.params.number');
    const number = parseInt(req.params.number); // need to convert parameter to number
    if(isNaN(number)) { // if not a random number return an error message 
      res.send("you must specify a number.")
    } else {
        const random= Math.floor(Math.random() * (number + 1)) // generate a random number between 0 and random number
        res.send(`you rolled a random ${random}`) 
    }});


  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

    app.get("/collectibles/:index" , (req,res)=> {
        const index = parseInt(req.params.index); 
     if(isNaN(index) || index<0 || index >= collectibles.length) {
        res.send(`This item is not yet in stock. Check back soon!`);
     } else {
        const item = collectibles[index];
        res.send(`So you want the ${item.name}? For ${item.price} , it can be yours.`)
     }});

     const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
  
app.get("/shoes", (req,res) => {
   const minPrice= parseFloat (req.query['min-price']);
     const maxPrice= parseFloat (req.query['max-price']);
     const type = req.query.type;
    let filteredShoes = shoes;
    if (minPrice !== undefined && !isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    // Check if maxPrice is a valid number and filter accordingly
    if (maxPrice !== undefined && !isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }
        if (type){
            filteredShoes= filteredShoes.filter(shoe=> shoe.type===type);
        }
        res.json(filteredShoes);
});


      
    