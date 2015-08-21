/**
 * Created by lukedowell on 8/21/15.
 */

var express = require('express');
var app = express();
var index = require('./routes/index');

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');

app.use('/', index);

app.listen(app.get('port'), function() {
    console.log("Server listening on port: " + app.get('port'));
});

module.exports = app;