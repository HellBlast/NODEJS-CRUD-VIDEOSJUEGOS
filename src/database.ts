import mysql from 'mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err){
    if(err){
        console.log('Error al conectar a la BD: '+err)
    }
    else{
        console.log('Conectado correctamente a ala BD')
    }
// Connection is automatically released when query resolves
});

export default pool;
     
