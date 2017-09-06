var express = require('express');
var router = express.Router();
var FroalaEditor = require('./../node_modules/wysiwyg-editor-node-sdk/lib/froalaEditor.js');

var bodyParser = require('body-parser')
var path = require('path');
var fs = require('fs');

app.use(express.static(__dirname + '/'));
app.use('/bower_components',  express.static(path.join(__dirname, '../bower_components')));
app.use(bodyParser.urlencoded({ extended: false }));




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});
module.exports = router;

router.post('/images', function (req, res) {

    // Store image.
    FroalaEditor.Image.upload(req, '/images/', function(err, data) {
        // Return data.
        if (err) {
            return res.send(JSON.stringify(err));
        }
        console.log(data);
        res.send(data);
    });
});