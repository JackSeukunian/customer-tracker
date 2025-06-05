const customers = [
  {
    name: "Jack Seukunian",
    email: "Jack.seukunian@hotmail.com",
    purchases: ["notebook", "pen", "backpack"]
  },
  {
    name: "Gavin Cihak",
    email: "Gavin.cihak@yahoo.com",
    purchases: ["laptop", "charger"]
  },
  {
    name: "Trenton Murray",
    email: "Trenton.murray@yahoo.com",
    purchases: ["tablet", "calculator", "case"]
  }
];

customers.push({ 
  name: "Liam Johnson",
  email: "liam.johnson@gmail.com",
  purchases: ["monitor"]
});

customers.shift(); 

customers[0].email = "Gavin.c.newemail@yahoo.com"

customers[1].purchases.push("screen protector");  

customers.forEach((customer, index) => {
  console.log(`Customer #${index + 1}`);
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log('-------------------------');
});