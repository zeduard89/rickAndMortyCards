const users = require ('../utils/users')

const getLogin = (req,res) =>{
    
    const {email,password} = req.query

    users.find(user => user.email === email && user.password === password)?
    res.status(200).json({access:true})
    :res.status(401).json({error:message})


}

module.exports = getLogin;