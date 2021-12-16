var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res) {
    async.waterfall([
      function (callback) {
        userCollection.findOne({
          "email_address": req.body.email
        }, function (err, result) {
          if (err) {
            console.log(err);
            res.send({error: "An error has occurred"});
          } else {
            if (result == null) {
              res.send({"error": "This email address is not recognised, please check you have entered your email correctly"});
            } else {
              console.log("Email recognised");
              callback(null, result);
            }
          }
        });
      }
    ])
  });

module.exports = router;
