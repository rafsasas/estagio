const userRepository = require("../repositories/user");

resource = {
  getAll: async (req, res) => {
    try {
      const users = await userRepository.getAll();

      return res.send({ users });
    } catch (err) {
      return res.status(400).send({ error: "Falha no Registro", err: err });
    }
  },
  insertUser: async(req, res) => {
    try {

      const created = await userRepository.create(req.body);

      if (!created) {
        throw new Error("Não foi possível criar o usuário");
      }

      return res.status(201).send();
      
    } catch (e) {
      console.log(e)
      return res.status(400).send({ error: "Falha no Registro", err: e.message });
    }
  }
    
};

module.exports = resource;
