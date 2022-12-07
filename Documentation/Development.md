# Manual Development

## Downloads needed
Visual Studio Code is used for the IDE.
* https://code.visualstudio.com/

NodeJS is needed to download and manage packages.
* https://nodejs.org/en/download/

## Recreating the project
* Clone this repository using Visual Studio Code
* Open a terminal inside the cloned project
* Type the following command to install everything: `npm install`
* Create a `.env` file at the root of the directory.
* The `.env` file should follow this pattern:
  - DB_HOST='name of host from database'
  - DB_PORT= port # of database
  - DB_USERNAME='Your database username'
  - DB_PASSWORD='Your database password'
  - DB_NAME= 'Your name of your database'

* Run the command `npm run start` to start up back end API server


## Flyway Installation

## Replicating via Docker
