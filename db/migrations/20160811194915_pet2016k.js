exports.up = function(knex, Promise) {
    return knex.schema.createTable('customer', function(table){
        table.increments();
        table.string('name').notNullable().unique();
        table.string('address').notNullable();
        table.string('phone').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('customer');
};
