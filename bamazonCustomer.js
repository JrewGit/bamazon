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
    start();
})

//Calls a function that shows all of the available products inside of the SQL database.
function start() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        // console.log(res);
        // console.log(res[0].product_name);
        for (let i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | $${res[i].price}`)
        }
    })
    //BUG: Prompting before the query is returned.
    //Calls a function that prompts the user which item they want to buy.
    tobuy();
}

function tobuy() {
    inquirer.prompt([
        {
            name: 'buyer',
            type: 'input',
            message: 'What is the ID of the product that you want to buy?'
        },
        {
            name: 'howMany',
            type: 'input',
            message: 'How many would you like to buy?'
        }
    ])
        .then(function (answer) {
            connection.query('SELECT * FROM products', function (err, res) {
                if (err) throw err;
                if (answer.howMany > res[answer.buyer - 1].stock_quantity) {
                    console.log("Insufficient quantity!")
                    console.log(`There are only ${res[answer.buyer - 1].stock_quantity} ${res[answer.buyer - 1].product_name} left`);
                } else {
                    //Calls a function that updates the amount remaining in the SQL database.
                    updateQuantity(answer, res);
                }
            });
        })

}

function updateQuantity(answer, res) {
    connection.query('UPDATE products SET ? WHERE ?',
        [
            {
                stock_quantity: (res[answer.buyer - 1].stock_quantity) - (answer.howMany)
            },
            {
                item_id: answer.buyer
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log("UPDATED!")
        })
}