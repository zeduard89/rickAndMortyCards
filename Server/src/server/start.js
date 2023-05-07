
//! Union de mi DB con mi SERVIDOR

const server = require('./server');
const { sequelize } = require('../DB_connection');
const {saveApiData} = require('../controllers/saveApiData');



sequelize.sync({ force: true}).then( async () => {
    //sync (sincronizo mi DB)
    //saveApiData es una promesa! no olvidar (async/await)
    console.log('DB conectada, master');
    //console.log(await saveApiData());  //muestra lo que llega DB
    await saveApiData();
    //Una vez sincronizado a mi DB realizo la Conexion a mi Servidor
    server.listen(3001,()=>{
        console.log('Server on port 3001')
    })
}).catch((error)=>{
    console.log(error);
})


/*MODIFICACIONS DE TABLAS

En etapa de -CREACION- y modificacion de Models (de tablas)
{force:true} -> RESET -> DROP(delete) a todas las TABLAS y vuelve a crear segun su configuracion

En etapa -CONSULTAS- (crear, eliminar, modificar datos)
{force:false} -> mantiene todo igual y persistente

{alter:true} -> UPDATE -> las tablas se actualizas sin borrar INFO,puede dar error ya que aveces
lo viejo no tiene lo nuevo EJ: tabla user se le agrega email, user viejos, no tenian esa  propiedad

INSTALACION BACK
npm nodemon
npm i sequelize pg pg-hstore dotenv
*/      

