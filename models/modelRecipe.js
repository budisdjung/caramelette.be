const db = require("../db");

class ModelRecipe {
  static getAllRecipe() {
    const query = "SELECT * FROM recipe";
    return new Promise(function (resolve, reject) {
      db.all(query, (err, row) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(row);
      });
    });
  }

  static getRecipeById(id) {
    const query = "SELECT * FROM recipe WHERE id = ?";
    return new Promise(function (resolve, reject) {
      db.all(query, [id], (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result);
      });
    });
  }

  static registerRecipe(body) {
    if (body.title == null) {
      res.status(400).json({ message: "Title is required" });
    }
    if (body.summary == null) {
      res.status(400).json({ message: "Summary is required" });
    }
    if (body.ingredients == null) {
      res.status(400).json({ message: "Ingredients is required" });
    }
    if (body.instructions == null) {
      res.status(400).json({ message: "Instructions is required" });
    }
    if (body.source_url == null) {
      res.status(400).json({ message: "Source URL is required" });
    }
    if (body.image_url == null) {
      res.status(400).json({ message: "Image URL is required" });
    }
    if (body.created_by == null) {
        res.status(400).json({ message: "Your name is required" });
    }

    const query = `INSERT INTO recipe (title, summary, ingredients, instructions, source_url, image_url, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    return new Promise(function (resolve, reject) {
      db.run(
        query,
        [
          body.title,
          body.summary,
          body.ingredients,
          body.instructions,
          body.source_url,
          body.image_url,
          body.created_by
        ],
        function (err) {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(true);
        }
      );
    });
  }

  static updateRecipe(body, id) {
    const query = `UPDATE recipe SET title = ?, summary = ?, ingredients = ?, instructions = ?, source_url = ?, image_url = ?, updated_by = ? WHERE id = ?`;

    return new Promise(function (resolve, reject) {
      db.run(
        query,
        [
          body.title,
          body.summary,
          body.ingredients,
          body.instructions,
          body.source_url,
          body.image_url,
          body.updated_by,
          id,
        ],
        function (err) {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(true);
        }
      );
    });
  }

  // static updateTitle (req, res, next) {
  //     const body = req.body;
  //     const id = req.params.id;
  //     const query = `UPDATE recipe SET title = ?, updated_at = (DATETIME('NOW', 'LOCALTIME')) WHERE id = ?`

  //     db.run(query, [body.title, id], function (err) {
  //         if (err) {
  //             console.log(err)
  //         }
  //     })
  //     res.status(201).json({ message: 'Success update recipe title' })
  // };

  // static updateSummary (req, res, next) {
  //     const body = req.body;
  //     const id = req.params.id;
  //     const query = `UPDATE recipe SET summary = ?, updated_at = (DATETIME('NOW', 'LOCALTIME')) WHERE id = ?`

  //     db.run(query, [body.summary, id], function (err) {
  //         if (err) {
  //             console.log(err)
  //         }
  //     })
  //     res.status(201).json({ message: 'Success update recipe summary' })
  // };

  // static updateIngredients (req, res, next) {
  //     const body = req.body;
  //     const id = req.params.id;
  //     const query = `UPDATE recipe SET ingredients = ?, updated_at = (DATETIME('NOW', 'LOCALTIME')) WHERE id = ?`

  //     db.run(query, [body.ingredients, id], function (err) {
  //         if (err) {
  //             console.log(err)
  //         }
  //     })
  //     res.status(201).json({ message: 'Success update recipe ingredients' })
  // };

  // static updateInstructions (req, res, next) {
  //     const body = req.body;
  //     const id = req.params.id;
  //     const query = `UPDATE recipe SET instructions = ?, updated_at = (DATETIME('NOW', 'LOCALTIME')) WHERE id = ?`

  //     db.run(query, [body.instructions, id], function (err) {
  //         if (err) {
  //             console.log(err)
  //         }
  //     })
  //     res.status(201).json({ message: 'Success update recipe instructions' })
  // };

  // static updateSourceUrl (req, res, next) {
  //     const body = req.body;
  //     const id = req.params.id;
  //     const query = `UPDATE recipe SET source_url = ?, updated_at = (DATETIME('NOW', 'LOCALTIME')) WHERE id = ?`

  //     db.run(query, [body.source_url, id], function (err) {
  //         if (err) {
  //             console.log(err)
  //         }
  //     })
  //     res.status(201).json({ message: 'Success update recipe source URL' })
  // };

  // static updateImageUrl (req, res, next) {
  //     const body = req.body;
  //     const id = req.params.id;
  //     const query = `UPDATE recipe SET image_url = ?, updated_at = (DATETIME('NOW', 'LOCALTIME')) WHERE id = ?`

  //     db.run(query, [body.image_url, id], function (err) {
  //         if (err) {
  //             console.log(err)
  //         }
  //     })
  //     res.status(201).json({ message: 'Success update recipe image URL' })
  // };

  static deleteRecipe(id) {
    const query = "DELETE FROM recipe WHERE id = ?";

    return new Promise(function (resolve, reject) {
      db.run(query, [id], function (err) {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(true);
      });
    });
  }
}

module.exports = ModelRecipe;
