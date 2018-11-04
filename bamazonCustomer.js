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

function start() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        // console.log(res);
        // console.log(res[0].product_name);
        for (let i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | $${res[i].price}`)
        }
    })
    //BUG: Prompting before the query is returned
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
}