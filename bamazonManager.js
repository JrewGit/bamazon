const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    run();
});

function run() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please select from the following:',
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
        }
    ])
        .then(function (answer) {

            if (answer.options === 'View Products for Sale') {
                connection.query('SELECT * FROM products', function (err, res) {
                    if (err) throw err;
                    for (let i = 0; i < res.length; i++) {
                        console.log(`Item ID#: ${res[i].item_id} \nProduct Name: ${res[i].product_name} \nPrice: $${res[i].price} \nStock Quantity: ${res[i].stock_quantity}\n\n`);
                    }
                });
            } else if (answer.options === 'View Low Inventory') {
                connection.query('SELECT * FROM products WHERE stock_quantity < 5', function (err, res) {
                    if (err) throw err;
                    console.log('The following products have a count lower than 5: ');
                    //Make an if-else statement to log something whether an item is there or not.
                    for (let i = 0; i < res.length; i++) {
                        console.log(`${res[i].product_name}`);
                    }
                });
            } else if (answer.options === 'Add to Inventory') {
                connection.query('SELECT * FROM products', function (err, res) {
                    if (err) throw err;
                    for (let i = 0; i < res.length; i++) {
                        console.log(`Item ID#: ${res[i].item_id} \nProduct Name: ${res[i].product_name} \nPrice: $${res[i].price} \nStock Quantity: ${res[i].stock_quantity}\n\n`);
                    }
                });
                console.log(res.length)
                // let itemsInStore = [];
                // for (let i = 0; i < res.length; i++) {
                //     console.log(`${res[i].product_name}`);
                // }
                // console.log(itemsInStore)
                // inquirer.prompt([
                //     {
                //         type: 'list',
                //         name: 'addMore',
                //         message: 'What would you like to order more of?',
                //         choices: itemsInStore
                //     }
                // ])
            } else if (answer.options === 'Add New Product') {

            }

        })
};