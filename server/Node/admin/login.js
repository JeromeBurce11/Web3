const jwt = require("jsonwebtoken");
const config = require("../config");
const account = require("../models/admin");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const login = (req, res) => {
  let test = async function() {
    const exist = await account.getByAdmin(
      req.body.username,
      req.body.password
    );
    if (exist == null) {
      res.status(401).json({
        success: false,
        message:
          "Validation failed. Given username and password aren't matching."
      });
    } else {
      jwt.sign(
        { exist },
        config.secret,
        {
          expiresIn: 86400 // expires in 24 hours
        },
        (error, token) => {
          if (error) {
            res.json({
              error: error,
              data: null
            });
          }
          res.json({
            error: null,
            token: token
          });
        }
      );
    }
  };
};
test();

module.exports = {login}