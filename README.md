# PokéAPI Challenge

## Dependencies

* Docker engine
* Docker compose 

## Running

* To run with **Docker Engine** run the following snippet:
  ```bash
  docker build -t pokeapp .
  ```

  ```bash
  docker run --name pokeapp -p 3333:3333 pokeapp
  ```
* To run with **Docker Compose** run the snippet below:
  ```bash
  docker-compose up -d
  ```

## Usage

Access the URL ```localhost:3333/<pokemon_name>``` inserting the pokémon name.

Example:
  
  ```
  http://localhost:3333/ditto
  ```
