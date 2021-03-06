// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  var avg = 0;
  var Prices = 0;
  for (i = 0; i < data.length; i++) {
    Prices += data[i].price;
  }
  avg = (Prices / data.length);

  console.log(avg)
} 


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  var cost = [];
  for (i = 0; i < data.length; i++) 
    if (data[i].price >= 14 && data[i].price <= 18) {
      cost.push(data[i].title)
    }
     
  console.log(cost.join("\n"));

  }


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  var title = [];
  var price = [];
  for (i = 0; i < data.length; i++)
    if (data[i].currency_code === "GBP") {
      title.push(data[i].title);
      price.push(data[i].price);
    }
  console.log(title + " costs " + price + " pounds.");
}



// 4: Display a list of all items who are made of wood.
function question4 () {
  var list = []
  for (i = 0; i < data.length; i++) { 
    for (k = 0; k < data[i].materials.length; k++) {
      if (data[i].materials[k] === "wood") {
        list.push(data[i].title + " is made of wood.") 
    }
      
    } 
  } console.log(list.join ("\n"));
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  var list = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      list.push(data[i])
    }
  }

  for (var i = 0; i < list.length; i++) {
    console.log(list[i].title + " has " + list[i].materials.length + " materials:\n");
    list[i].materials.forEach(function(e) {
     console.log("-",e); 
    });  
  }
  
}



// 6: How many items were made by their sellers?
function question6() {
  var made = 0;
  for (i = 0; i < data.length; i++) {
      if (data[i].who_made === "i_did") {
        made = made + 1;
        
    }
    
  }
  console.log(made + " items were made by their sellers.");
}