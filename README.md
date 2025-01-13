# Mini Message Board: An Introductory Express Project

## About

This is the second project from [The Odin Project Node.js course](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board). The goal is to build a simple message board web app using [Node.js](https://nodejs.org/en), [Express](https://expressjs.com), and [EJS](https://ejs.co).

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org) installed locally.
- Ensure you have [PostgreSQL](https://www.postgresql.org) installed and running.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/JE-Richards/odin-mini-message-board
   ```

2. Navigate to the project directory

   ```bash
   cd your-repo
   ```

3. Run npm install

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add the following variables:

   ```plaintext
   HOST=<app_host>
   PORT=<app_port>
   DB_HOST=<database_host>
   DB_PORT=<database_port>
   DB_USER=<your_database_user>
   DB_USER_PW=<your_database_user_password>
   DB_NAME=<your_database_name>
   DB_URL=postgresql://<your_database_user>:<your_database_user_password>@<database_host>:<database_port/<your_database_name>
   ```

Replace anything inside `< >` with your PostgreSQL setup values.

5. Populate the database:
   Before using the app, you need to create and populate the database. Run one of the following commands.

- If you have a `DB_URL` specified in your `.env` file:

  ```bash
  node db/populateDb.js
  ```

- If you'd like to manually specify the database URL:

  ```bash
  node db/populateDb.js <DB_URL>
  ```

6. After running the script, the database will be populated with initial data, and the app is ready to use.

## Running the app

To start the app, run the following:

```bash
node app.js
```

Then open the app in your browser at:

```plaintext
http://<app_host>:<app_port>/
```

## Features

- View a list of user messages.
- Add a new message through a simple form.
- View individual messages.
