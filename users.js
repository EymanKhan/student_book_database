exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, name: 'Hettie Marshall', email: 'lantunde@acbo.va'},
        {id: 2, name: 'Hester Owens', email: 'zo@girih.lv'},
        {id: 3, name: 'Henry Jackson', email: 'bekamohi@owo.mt'}
      ]);
      
    });

};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {serial: 1, ISBN: '11243', name: 'Azaadi ki Kahaniya', author:'Meesu Khan'},
        {serial: 2, ISBN: '11243', name: 'Azaadi ki Kahaniya', author:'Meesu Khan'},
        {serial: 1, ISBN: '11244', name: 'Maths for beginners', author:'JJ Howards'}
      ]);
      
    });

};