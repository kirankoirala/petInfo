
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customer').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('customer').insert({name: 'rowValue1', address:'westlake',phone:'123-432-3833' }),
        knex('customer').insert({name: 'rowValue2', address:'avon lake',phone:'555-666-4343'}),
        knex('customer').insert({name: 'rowValue3', address:'avon', phone:'546-434-9898'})
      ]);
    });
};
