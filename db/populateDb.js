require('dotenv').config();
const { Client } = require('pg');

// UNIQUE constraint on (message, user) to prevent duplicates
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR (255),
  username TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT unique_message_user UNIQUE (message, username)
);`;

// ON CONFLICT for INSERT INTO ensures duplicate entires aren't inserted
// This means the code can be executed more than once without fear of duplication
const insertSQL = `INSERT INTO messages (message, username)
VALUES
  ($1, $2)
ON CONFLICT (message, username) DO NOTHING;
`;

const messages = [
  ['Hi there!', 'Amanda'],
  ['Hello World!', 'Charles'],
  ['Good morning', 'Brandon'],
];

async function populate() {
  const connectionString = process.argv[2] || process.env.DB_URL; // node db/populateDb.js <connection_string>

  if (!connectionString) {
    console.error('Error: Please provide a connection string as an argument.');
    console.error('Usage: node db/populateDb.js <connection_string>');
    process.exit(1);
  }

  console.log('seeding db...');
  const client = new Client({
    connectionString,
  });

  try {
    console.log('Attempting to connect to the database...');
    await client.connect();
    console.log('Connection successful.');

    console.log('Running SQL queries...');
    await client.query(SQL);
    for (const [message, username] of messages) {
      await client.query(insertSQL, [message, username]);
    }
    console.log('Database successfully seeded.');
  } catch (error) {
    console.error('Error while seeding the database: ', error.message);
  } finally {
    console.log('Closing the database connection...');
    await client.end();
    console.log('Done.');
  }
}

populate();
