const client = require('../database/conexao');

const repository = {
  getAll: async () => {
    try {
      const query = `select * from user_rafael;`;

      const users = await client.query(query);

      return users.rows;

    } catch (e) {
      client.end(console.log("Closed client connection"));
      console.log(e);
    } finally {
      client.end();
    }
  },
  create: async ({name, email, password}) => {
    try {
      const query = `insert into user_rafael ("name", "email", "password", "createAt") values ('${name}', '${email}', '${password}', now())`;

      const users = await client.query(query);

      console.log(users);

      return true;

    }catch (e) {
      console.log(e);
      client.end(console.log("Closed  client connection"));
      return false; 
    } finally {
      client.end();
    }
  }
};

module.exports = repository;
