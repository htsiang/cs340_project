// citation for the following code
// Date: 1/8/2026
// Copied from (slightly modified for credentials): class template
// Source URL: https://canvas.oregonstate.edu/courses/2031764/assignments/10323319?module_item_id=26243357

import 'dotenv/config';

// Get an instance of mysql we can use in the app
import mysql from 'mysql2';

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    waitForConnections: true,
    connectionLimit   : 10,
    host              : process.env.DB_HOST,
    user              : process.env.DB_USER,
    password          : process.env.DB_PASSWORD,
    database          : process.env.MY_DB
}).promise(); // This makes it so we can use async / await rather than callbacks

// Export it for use in our application
export default pool;

console.log(process.env.HOST)