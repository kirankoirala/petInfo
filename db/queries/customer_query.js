var knex = require('../knex.js');

var customer_queries = {
  fetch_all_customers : function(renderData){
 knex.select().table('customer').then(renderData);
}
};

module.exports = customer_queries;