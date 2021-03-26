const pg = require("pg");

const config = {
  host: "172.18.80.45",
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: "renato",
  password: "123456",
  database: "uberizacao",
  port: 5432,
};

const client = new pg.Client(config);

client.connect((err) => {
  if (err) console.log("Error", err);
  else {
    console.log("Sucesso"); // queryDatabase();
  }
});

module.exports = client;
