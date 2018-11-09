# bamazon
An Amazon-like storefront with MySQL. The app will take in orders from customers and deplete stock from the store's inventory. It can track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.

## The application first displays all of the items available for sale. Include the ids, names, and prices of products for sale.
![Bamazon-Item-List](https://github.com/JrewGit/bamazon/blob/master/images/bamazonItemList.png)

## The app then prompt users with two messages:
1. The first asks them the ID of the product they would like to buy.
2. The second message asks how many units of the product they would like to buy.

![Bamazon-ID-Request](https://github.com/JrewGit/bamazon/blob/master/images/bamazonIDRequest.png)

![Bamazon-Item-Amount](https://github.com/JrewGit/bamazon/blob/master/images/bamazonItemAmount.png)

## Once the customer has placed the order, the application then checks if the store has enough of the product to meet the customer's request. If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

![Bamazon-Item-Insufficient](https://github.com/JrewGit/bamazon/blob/master/images/bamazonInsufficientFunds.png)

## If the store does have enough of the product, it fulfills the customer's order and updates the SQL database to reflect the remaining quantity.

![Bamazon-Item-sql](https://github.com/JrewGit/bamazon/blob/master/images/sqlScreenshot.png)

## Once the update goes through, show the customer the total cost of their purchase.

![Bamazon-manager-view](https://github.com/JrewGit/bamazon/blob/master/images/bamazonPriceConfirm.png)

## If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

![Bamazon-manager-list](https://github.com/JrewGit/bamazon/blob/master/images/bamazonManagerList.png)

## If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.

![Bamazon-Item-List](https://github.com/JrewGit/bamazon/blob/master/images/bamazonLow.png)