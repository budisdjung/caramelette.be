const db = require("./db");

const createRecipe = `
    CREATE TABLE recipe (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        title           VARCHAR NOT NULL,
        summary         TEXT NOT NULL,
        ingredients     TEXT NOT NULL,
        instructions    TEXT NOT NULL,
        source_url      TEXT NOT NULL,
        image_url       TEXT NOT NULL,
        created_at      TEXT NOT NULL DEFAULT (DATETIME('NOW', 'LOCALTIME')),
        created_by      VARCHAR NOT NULL,
        updated_at      TEXT DEFAULT (DATETIME('NOW', 'LOCALTIME')),
        updated_by      VARCHAR
    )
`;

db.serialize(() => {
  db.run(createRecipe, (err) => {
    if (!err) {
      console.log("table created");
    } else {
      console.log(err);
    }
  });
});
