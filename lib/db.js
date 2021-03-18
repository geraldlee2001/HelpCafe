const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "helpcafe",
    user: "root",
    password: "", 
})
// export const db = mysql({
//     config: {
//         host: "localhost",
//         port: "3306",
//         database: "helpcafe",
//         user: "root",
//         password: "",
//     },
// });

export default async function excuteQuery({ query, values }) {
    try {
        const results = await connection.query(query, values);
        await connection.end();
        return results;
    } catch (error) {
        return { error };
    }
}
