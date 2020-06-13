const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places2 (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         entidade TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // const query = `
    //             INSERT INTO places2 (
    //                 entidade,
    //                 image,
    //                 address,
    //                 address2,
    //                 state,
    //                 city,
    //                 items
    //             )
    //             VALUES (?,?,?,?,?,?,?);
    //         `

    // const values = [
    //     "Papersider",
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Guilherme Gemballa, Jardim America",
    //     "Numero 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Residuos Eletronicos, Lampadas"

    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }


    //     console.log("Cadastrado Com Sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData) 

    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })
//-------------------------------------------------DELETAR---------------------------------------\\
    db.run(`DELETE FROM places2 WHERE id = ?`, [6], function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    })

})