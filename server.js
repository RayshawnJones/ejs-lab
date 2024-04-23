// npm install express
const express = require('express');
// npm install body-parser
const app = express();
// npm install path
const path = require('path');



// Defines a constant object named RESTAURANT. This object represents a restaurant and contains several properties that describe the restaurant and its menu.

// The RESTAURANT object has the following properties:

// name: A string that represents the name of the restaurant.
// isOpen: A boolean that indicates whether the restaurant is open or not.
// address: A string that represents the address of the restaurant.
// phone: A string that represents the phone number of the restaurant.
// menu: An array of objects, where each object represents a menu item.
// Each menu item object in the menu array has the following properties:

// id: A unique identifier for the menu item.
// name: The name of the menu item.
// price: The price of the menu item.
// rating: The rating of the menu item, presumably out of 5.
// category: The category of the menu item, such as 'mains', 'desserts', or 'sides'.
// details: A description of the menu item.
// This structure allows for easy access to the restaurant's information and its menu items. For example, RESTAURANT.name would give you the name of the restaurant, and RESTAURANT.menu[0].name would give you the name of the first menu item.

const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}
// Set the view engine to EJS
app.set('view engine', 'ejs');


// The app.get('/', function(req, res) {...}) line is defining a route handler for HTTP GET requests made to the root URL ('/') of your application. When a client (like a web browser) makes a GET request to your application's root URL, the function you've provided will be called.

// Inside this function, two objects are available: req and res. The req object represents the HTTP request that was made. It contains details about the request, such as the URL, HTTP headers, and any data sent by the client.

// The res object represents the HTTP response that your application will send back to the client. You can use this object to send data back to the client, set HTTP headers, set the status code, and more.

// The res.render('home', { title:RESTAURANT.name, restaurant:RESTAURANT }); line is using the res.render function to generate an HTML page and send it back to the client. This function takes two arguments: the name of a view (in this case, 'home'), and an object containing data to be passed to the view.

// In this case, the view is being passed an object with two properties: title, which is set to RESTAURANT.name, and restaurant, which is set to RESTAURANT. This object will be used by the 'home' view to generate the HTML that is sent back to the client.



app.get('/', function(req, res) {
  res.render('home', { title:RESTAURANT.name, restaurant:RESTAURANT });
 }) 

app.get('/', (req, res) => {
  
  //  Represents a restaurant.
  //  @typedef {Object} Restaurant
  //  @property {string} name - The name of the restaurant.
  //  @property {string} address - The address of the restaurant.
  //  @property {string} phone - The phone number of the restaurant.
  //  property {boolean} isOpen - Indicates whether the restaurant is open or not.
   
//block defines a new object named restaurant that represents a restaurant. It has properties such as name, address, phone, and isOpen. The isOpen property indicates whether the restaurant is open or not.

  const restaurant = {
    name: 'Restaurant Name',
    address: 'Restaurant Address',
    phone: 'Restaurant Phone',
    isOpen: true // or false
  };

});

// The app.get('/menu', function(req, res) {...}) line is defining a route handler for HTTP GET requests made to the '/menu' URL of the application. When the client makes a GET request to the application's '/menu' URL, the function  provided will be called.
app.get('/menu', function(req, res) {
  res.render('menu', { menu: RESTAURANT.menu });
});

app.get('/menu/:category', function(req, res) {
  const category = req.params.category;
  const filteredMenu = RESTAURANT.menu.filter(item => item.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  res.render('category', { category: categoryName, menu: filteredMenu });
});


app.set("views", path.join(__dirname, "views"));
app.listen(3000);
  console.log('Listening on port 3000');
  
