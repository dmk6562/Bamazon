var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require('cli-table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    //Username
    user: "root",
  
    // Password
    password: "",
    database: "bamazonDB"
  });
  
  function productItems() {
	connection.connect(function(err) {

		connection.query("SELECT * FROM Products", function(err, res) {
		if (err) throw err
		else console.table(res , "\n");
		productId();
		});
	});
}
productItems();

function productId() {

	inquirer.prompt([

		{
		 type: "input",
		 name: "id",
		 message: "Please enter the Item ID of the product you would like to buy.\n",
		 validate: function(value) {
		 	if (!isNaN(value) && value < 11) {
		 		return true;
		 	}
		 	return false;
		 }
},

{
    type: "input",
    name: "quant",
    message: "How many units of the product would you like to buy? \n",
    validate: function(value) {
        if (!isNaN(value)) {
            return true;
        }
        return false;
       }
}

]).then(function(answer) {

    //console.log("Answer: ", answer);

    var itemId = answer.id;
    console.log("Selected item id: " , itemId);

    var productUnits = answer.unit;
    console.log("Selected units from stock: " , productUnits , "\n");

    connection.query("SELECT * FROM products WHERE ?", [{ item_id : answer.id }], function(err, res) {
        if (err) throw err;
        //grab the item_id from the table that matches
        //return the item_id
        console.table(res);
        var current_units = res[0].stock_units;
        console.log("Current units in stock: " , current_units);
        var price = res[0].price;
        var remaining_units = current_units - answer.unit;
        console.log("Remaining units in stock: " , remaining_units);

        if(current_units > answer.unit) {

            console.log("Amount Remaining: " + remaining_quantity);
            console.log("Total Cost: " + (answer.unit * price) + "\n");

            connection.query("UPDATE Products SET stock_units=? WHERE item_id=?",
            [
            remaining_units, answer.id
            ],

            // connection.query("UPDATE products SET stock_units=? WHERE item_id?",
            // 	[remaining_quantity, answer.id],

                function(err, res){
                    console.table(res);
                });

            connection.query("SELECT * FROM Products", function(err, res) {

                console.log("Here is an updated inventory: ");
                console.log("------------------------------- \n");
                console.table(res);
            });

        } else {
            console.log("Insufficient quantity, please try again!");
        }

    connection.end();

    });
})

}