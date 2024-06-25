module.exports = {
  port: 3020,
  database: {
    username:       process.env.ORACLEUSER,
    password:       process.env.PASSWORD,
    host:           process.env.ORACLEHOST,
    port:           process.env.ORACLEPORT,
    sid:            process.env.ORACLESID,
    dialect:        process.env.DIALECT,
    poolMax:        2,
    poolMin:        2,
    poolIncrement:  1
  }
};
