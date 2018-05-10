# Backend test for CornerJob

## Pre-requisites

* Docker installed [Link](https://docs.docker.com/install/)
* Docker compose installed [Link](https://docs.docker.com/compose/install/)

## Installation and start project

* git clone https://github.com/oriolgg/coffeemp.git
* cd simple-api-nodejs-mongodb
* docker-compose up

## Remove created containers

* docker-compose rm

## API calls

* URL base: http://localhost:3000/api/v1/

* Create admin: POST /users

```json
{
  "data": {
    "user": {
      "username": "admin",
      "password": "1234",
      "role": "admin"
    }
  }
}
```

* Create customer: POST /users

```json
{
  "data": {
    "user": {
      "username": "customer",
      "password": "1234",
      "role": "customer"
    }
  }
}
```

* Create Coffee: POST /coffees

```json
{
  "data": {
    "coffee": {
      "name": "Ristretto",
      "intensity": 8,
      "price": 300,
      "stock": 50
    }
  }
}
```

* Create Order: POST /orders

```json
{
  "data": {
    "order": {
      "user": "5af2f4e8c3b9c0001117db46",
      "coffee": "5af30001e77f19001091331b",
      "amount": 420,
      "quantity": 21
    }
  }
}
```
