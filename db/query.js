/**
 * Created by lilei8 on 2018/8/20.
 */
const mysql = require('mysql')
/*const pool = mysql.createPool({
    host     :  '127.0.0.1',
    user     :  'root',
    password :  '123456',
    database :  'sweet_journey'
})*/
const pool = mysql.createPool({
    host     :  '10.182.34.24',
    user     :  'jdct_test',
    password :  'jdct_test',
    database :  'test_journey'
})

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
            pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {

                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
            })
            }
        })
})
}

module.exports = { query }