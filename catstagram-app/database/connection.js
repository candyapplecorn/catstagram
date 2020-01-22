
function fakeDatabase() {
  const fs = require('fs');
  const FAKE_DB_FILE_PATH = `${__dirname}/../fake-cat-database.json`;

  const fileIO = filePath => ({
    async getJSON() {
      return new Promise(function(resolve, reject) {
        fs.readFile(filePath, 'utf8', function(err, data) {
          err ? reject(err) : resolve(JSON.parse(data));
        });
      });
    },

    async writeJSON(data) {
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }

      return new Promise(function(resolve, reject) {
        fs.writeFile(filePath, data, function(err) {
          err ? reject(err) : resolve(data);
        });
      });
    }
  });

  return {
    connection() {
      return fileIO(FAKE_DB_FILE_PATH);
    }
  };
}

module.exports = function connect(kind) {
  if (/file/i.test(kind)) {
    return fakeDatabase();
  } else {
    throw `Unknown kind of database: ${kind}. Please specify the environment variable DATABASE_TYPE=[FILE]`;
  }
}
