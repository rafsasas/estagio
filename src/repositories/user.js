const client = require('../database/conexao');

const repository = {
  getAll: async () => {
    try {
      const query = `select * from user_rafael;`;

      const users = await client.query(query);

      return users.rows;

    } catch (e) {
      console.log(e);
    } finally {}
  },
  create: async ({name, email, password}) => {
    try {
      const query = `insert into user_rafael ("name", "email", "password", "createAt") values ('${name}', '${email}', '${password}', now())`;

      const users = await client.query(query);

      console.log(users);

      return true;

    }catch (e) {
      console.log(e);
      
      return false; 
    } finally {}
  },
  delete: async ({id}) => {
  try{
    const query = `delete from user_rafael
    Where id =  (${id}) `

    const users = await client.query(query);
    if (users.rowCount <= 0){
      return false;
    }

    return true;
    
  }catch (e) {
    console.log(e);
    return false;
  } finally {}
},
  update: async (id,{name, password, email}) => {
    console.log(typeof id)
    try{
      const query = `update user_rafael set name = '${name}', email = '${email}', password = '${password}' where id = '${id}'`;

      const user = await client.query(query);
      return user;

  } catch (e){
    console.log(e)
    return false;
  } finally {}
  },
  findById: async (id) => {
    try{ 
      const query = `select * from user_rafael 
      where id = ${id}`
      const user = await client.query(query)
      return user?.rows[0] || null;

    }catch (e){
      return false;
    } finally{}
  },
}
  
module.exports = repository;
