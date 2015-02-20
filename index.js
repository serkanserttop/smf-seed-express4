var express = require('express');
var app = express();

var static_options = {
  dotfiles: 'ignore',
  etag: false,
  //extensions: ['htm', 'html'],
  index: false,
  //maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};

app.use('/', express.static(__dirname + '/dist', static_options));

var server = app.listen(process.env.PORT || 3000, function() {
  var host = process.env.IP || server.address().address;
  var port = process.env.PORT || server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});