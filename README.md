# Bamazon

# Overview

Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

##Bamazon Customer View 
*Running 'bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, prices of products for sale and the stock quantity.

* The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

* Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log the phrase `Insufficient quantity!`, and prevent the order from going through.

* The app will require npm inquirer and npm mysql.

* **Screenshot Images**
* The app first displays all items available for sale in the bamazon inventory.

![productitems](https://user-images.githubusercontent.com/33642075/39650215-42b037e6-4fb5-11e8-826f-16438315ad31.PNG)

* The app then prompts users with two messages, to place an order. The cost of the purchase is also displayed.

![itemselection](https://user-images.githubusercontent.com/33642075/39650226-516be6fe-4fb5-11e8-8f11-8326cef0ad98.PNG)

* The app then updates the database to reflect the remaining inventory.

![updatedinventory](https://user-images.githubusercontent.com/33642075/39650230-568029a2-4fb5-11e8-8ab3-d3fae14d9129.PNG)