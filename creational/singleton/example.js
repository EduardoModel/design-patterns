// Example for the Singleton Pattern
const myDatabaseConnection = (function () {
  let dbConnection = null;

  function createConnection() {
    return {
      database: 'Postgres',
      dbName: 'singleton',
      dbUser: 'pattern',
      host: 'localhost',
    };
  }

  return {
    getConnection() {
      if (!dbConnection) {
        dbConnection = createConnection();
      }
      return dbConnection;
    },
  };
})();

console.log('\x1b[33m%s\x1b[0m', 'Database connection example');

const firstConnection = myDatabaseConnection.getConnection();
console.log('First call to get the database connection');

const secondConnection = myDatabaseConnection.getConnection();
console.log('Second call to get the database connection');

console.table([firstConnection, secondConnection]);

console.log(
  'Make the comparison with the === operator to verify that booth connections reference the same object'
);
console.log(
  `Do the objects have the same reference? ${
    firstConnection === secondConnection ? 'Yes 👍' : 'No 👎'
  }`
);
