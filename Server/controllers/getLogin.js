const users = require ('../utils/users')

const getLogin = (req,res) =>{
    
    const {email,password} = req.query


    users.find(user => user.email === email && user.password === password)?
    res.status(200).json({access:true})
    :res.status(500).json({access:false})


}

module.exports = getLogin;