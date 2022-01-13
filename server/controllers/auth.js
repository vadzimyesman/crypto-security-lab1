const bcrypt = require('bcrypt')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      //const salt = bcrypt.genSaltSync(5)
      //const passwordHash = bcrypt.hashSync(password,salt)
      const {username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password,users[i].passwordHash)
        if (users[i].username === username && existing) {
          
          const userToReturn = {...users[i]}
          delete userToReturn.password
          
          res.status(200).send(userToReturn)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const {username,email,firstName,lastName,password}=req.body
        
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password,salt)
        let newUserObj = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }
        //newUserObj.password=passwordHash
        console.log('Registering User')
        console.log(req.body)
        console.log(newUserObj)


        users.push(newUserObj)
        res.status(200).send(req.body)
    }
}
