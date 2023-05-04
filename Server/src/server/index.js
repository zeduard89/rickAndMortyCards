const {server} = require('../app')
const PORT = 3001;


//! Monto el server
//Si tengo el listen en el mismo archivo que TESTEO entra en bucle INF
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
