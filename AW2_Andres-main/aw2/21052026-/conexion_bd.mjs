import {Pool} from 'pg'

const pg = new Pool({
    host: 'localhost',
    user: 'root',
    database: 'tienda',
    port: 5432
})
 export default pg