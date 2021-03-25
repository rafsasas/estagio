const postgres = require('pg');

postgres.connect ('jdbc:postgresql://localhost:5432/uberizacao', { usePostgresClient: true});
postgres.Promise = global.Promise;

module.exports = postgres; 