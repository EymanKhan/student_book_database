exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('books').del()
      .then(function () {
        // Inserts seed entries
        return knex('books').insert([
          {serial: 1, ISBN: '11243', name: 'Azaadi ki Kahaniya', author:'Meesu Khan'},
          {serial: 2, ISBN: '11243', name: 'Azaadi ki Kahaniya', author:'Meesu Khan'},
          {serial: 1, ISBN: '11244', name: 'Maths for beginners', author:'JJ Howards'}
        ]);
        
      });
  
  };