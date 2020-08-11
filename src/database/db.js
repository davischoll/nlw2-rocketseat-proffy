const dataBase = require('sqlite-async')

function execute(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id_prof INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      phone TEXT,
      bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes (
      id_class INTEGER PRIMARY KEY AUTOINCREMENT,
      subject INTEGER,
      cost TEXT,
      prof_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
      id_schedule INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER,
      weekday INTEGER,
      time_from INTEGER,
      time_to INTEGER
    );
  `)
}

module.exports = dataBase.open(__dirname + '/database.sqlite').then(execute)