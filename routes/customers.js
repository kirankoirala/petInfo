var express = require('express');
var router = express.Router();

var customer_queries = require('../db/queries/customer_query')

/* GET users listing. */
router.get('/', function(req, res) {
    function renderData(data){
        res.render('customers', {
            title: 'Customers',
            customers:data
        });
    }
    customer_queries.fetch_all_customers(renderData);

});

router.get('/add',function(req,res){
    res.render('add_customer',{
        title: 'Add Customer'
    });
});

router.post('/add',function(req,res){
    console.log('test');
    console.log(req);
});

module.exports = router;
