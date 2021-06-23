# AlteroSurvive
Survival Project in GTA 5 

## How to Docker Containers up
1. Install Docker and Docker Compose: For Linux - https://docs.docker.com/engine/install/ For Windows - https://habr.com/ru/post/474346/

2. Clone this repository
3. Open terminal and write next commands

```
    docker-compose build
```
```
    docker-compose up -d
```

## How to use Postgres and PGADMIN

### Postgres
For add sql scripts go to 
``` 
Postgres/sql-scripts
``` 
and create or move .sql file and then open postgres container and exec script

### PGADMIN
For opening pgadmin in web browser write 
```
    http://localhost:8080
```     

Default User:
```
    email: admin@mail.ru
    password: admin
```

For connect to postgres server fill next fields

```
    Host: postgres
    Username: postgres
    Password: postgres
    Maintenance database: postgres
```

