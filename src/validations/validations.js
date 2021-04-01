const { body, validationResult } = require("express-validator");

const validationInsert = {
  validationInsertUser: () => {
    return [
      body("email").isEmail(),
      body("password").isLength({ min: 8 }),
      body("nome").isLength({ min: 1 }),
    ];
  }
}

const validationDelete = {
    validationDeleteUser: () => {
        return[
            param("id").isLength({min :1})
        ]
    }
}


module.exports = validation;
