const pg = require('pg');

const config = {
    host: '172.18.80.45',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'renato',     
    password: '123456',
    database: 'uberizacao',
    port: 5432,
    
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) console.log('Error', err);
    else {
        console.log('Sucesso')// queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}