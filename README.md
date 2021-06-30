# AlteroSurvive

Survival Project in GTA 5



## How to Docker Containers up

1. Install Docker and Docker Compose: For Linux - https://docs.docker.com/engine/install/ For Windows - https://habr.com/ru/post/474346/

2. Clone this repository
3. Open terminal and write next commands




```
    docker-compose up -d
```
**Note**: When we received the changes from the repository, we need to rebuild the containers . 

P.S This information is not for layout designers

To do this, enter:
```
   docker compose down
```
```
  docker compose up -d
```

## How to use Postgres

### Postgres

For add sql scripts go to

```
Postgres/sql-scripts
```

and create or move .sql file and then open postgres container and exec script
