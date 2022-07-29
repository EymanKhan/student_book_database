const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get('/user', (req, res) => {
  // TODO get users
  knex('users')
  .select({
    id: 'id',
    name: 'name'
  })
  .then((users) => {
    return res.json(users);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })

});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});