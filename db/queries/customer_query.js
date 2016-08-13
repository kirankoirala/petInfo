var knex = require('../knex.js');

var customer_queries = {
  fetch_all_customers : function(renderData){
        knex.select().table('customer').then(renderData);
    },
    get_customer_by_id : function(customer_id, renderData){
        knex.select().table('customer').where('id', customer_id).then(renderData);
    },
    add_customer : function(insertData,callback){
        knex.insert(insertData).into('customer').then(function(id){
           return id;
        });
    }
};

module.exports = customer_queries;