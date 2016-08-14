var knex = require('../knex.js');

var customer_queries = {
  fetch_all_customers : function(renderData){
        knex.select().table('customer').orderBy('id').then(renderData);
    },
    get_customer_by_id : function(customer_id, callback){
        knex.select().table('customer').where('id',customer_id).then(function(customer){
            return callback(customer[0]);
        });
    },
    add_customer : function(insertData,callback){
        knex.insert(insertData).into('customer').then(function(id){
           return id;
        });
    },
    update_customer : function(updateData,callback){
        knex('customer')
            .where('id', updateData.id)
            .update({
                name:updateData.name,
                address:updateData.address,
                phone:updateData.phone
            }).then(function(){
                console.log("successfullu updated the record!!")
        });

    }
};

module.exports = customer_queries;