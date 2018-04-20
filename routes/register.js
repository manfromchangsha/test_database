const express = require('express');
const app = express();

app.get('/registerUser', function(req, res, next) {
  req.getConnection(function(error, conn) {
    const {first, last, email, pass } = req.query;
    sqlQuery_userInfo = `INSERT INTO userinfo (FirstName, LastName, Email, PasswordHash) VALUES ('${first}', '${last}', '${email}', '${pass}')`;

    conn.query(sqlQuery_userInfo, function(err, result) {
      if(err) {
        // Distplay error message in case of error
        req.flash('error', err)
      }

      else {
        return res.send('successfully added user')
      }
    })
  })
})

module.exports = app
