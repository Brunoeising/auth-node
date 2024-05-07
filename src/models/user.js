const db = require("../config/database");

const User = {
  create: (user) => {
    return db
      .promise()
      .execute(
        "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
        [user.username, user.email, user.password]
      );
  },

  findByEmail: (email) => {
    return db.promise().query("SELECT * FROM user WHERE email = ?", [email]);
  },
};

module.exports = User;
