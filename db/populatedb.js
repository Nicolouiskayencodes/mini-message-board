const { Client } = require("pg");
require("dotenv").config();

const SQL = `

CREATE TABLE IF NOT EXISTS messages (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  text VARCHAR NOT NULL,
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (name, text) 
VALUES
  (
    'Nico',
    'Hi I made this site!'
),
  (
    'Nico',
    'Feel free to add your own messages!'
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.database_url
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();