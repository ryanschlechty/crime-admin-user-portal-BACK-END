# Manual Development

## Downloads needed
Visual Studio Code is used for the IDE.
* https://code.visualstudio.com/

NodeJS is needed to download and manage packages.
* https://nodejs.org/en/download/

Postgresql is needed to for the database. 
* https://www.postgresql.org/download/

PGAdmin is an application used to view the Postgresql database, which is helpful to have.
* https://www.pgadmin.org/download/

## Recreating the project
* Clone this repository using Visual Studio Code
* Open a terminal inside the cloned project
* Type the following command to install all packages needed: `npm install`
* Create a `.env` file at the root of the directory.
* The `.env` file should follow this pattern:
  - DB_HOST='name of host from database'
  - DB_PORT= port # of database
  - DB_USERNAME='Your database username'
  - DB_PASSWORD='Your database password'
  - DB_NAME= 'Your name of your database'
* This is an example of a `.env` file:
  - DB_HOST='localhost'
  - DB_PORT=5432
  - DB_USERNAME='postgres'
  - DB_PASSWORD='password123'
  - DB_NAME= 'NotARealDB'

* Run the command `npm run start` to start up back end API server


## Flyway
Flyway is the tool used to perform data migrations for the application. Download Flyway in order to create the tables needed for this application. Postgresql is required for data migrations to work for this application.
### Installation
To download the Flyway command-line tool click the following link.
* https://flywaydb.org/download
### Implementation
After downloading Flyway command-line tool perform a data migration by following these steps:
* Open the Command Prompt.
* Type the command: `flyway migrate -locations="filesystem:<file path to cloned backend project /database/migrations folder>" -url=jdbc:postgresql://<hostname>:<port>/<database name> -user=<your username> -password=<your password>`
* Example Flyway migrate command: `flyway migrate -locations="filesystem:C:\Users\judek\VSCode\crime-admin-user-portal-BACK-END\src\database\migrations" -url=jdbc:postgresql://localhost:5432/LicenseDB -user=postgres -password=somepassword`
* Open postgresql database to see new tables 'Organizations' and 'Users' have been added along with the 'flyway_schema_history' table.


## Replicating via Docker
* Install docker desktop for your OS
* Clone this repository 
* Build docker image via `docker build -t crime-admin-user-portal-project-back-end .`
* Run image via `docker run -d -p 3000:3000 crime-admin-user-portal-project-back-end`
