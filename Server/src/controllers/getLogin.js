//importo un Arr con un arreglo,no ADM destructuring
const users = require ('../utils/utils')

const getLogin = (req,res) =>{
    
    //Lo recivo de 1 input por ende Query
    const {email,password} = req.query
    
    users.find(user => user.email === email && user.password === password)
    ?res.status(200).json({access:true})
    :res.status(401).json('{access:false}')


}

module.exports = getLogin;