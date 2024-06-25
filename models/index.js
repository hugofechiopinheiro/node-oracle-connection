const oracledb = require('oracledb');

// CONSTANTS
const {
  username: user,
  password,
  host,
  port,
  sid,
  poolMax,
  poolMin,
  poolIncrement
} = require('../env.config').database

let connection;
connection = oracledb.getConnection({
  user,
  password,
  connectString: `${host}:${port}/${sid}`,
  poolMax,
  poolMin,
  poolIncrement
})
.then(c => {
  // EXEC TEST
  c.execute( 'select current_timestamp from dual' )
  .then(({ rows }) => { console.log({ rows }) })
  .catch(() => { return 'DB_EXEC_ERROR' })
  return c;

})
.catch(() => { return false; })

// IF ERROR
if (!connection) throw new Error('CONN_ERROR')

module.exports = connection
