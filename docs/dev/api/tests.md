---
sidebar_position: 1
title: ⚙️ Test API
description: You can use our test API for development, which gives the full functionality of the main API.
---

# ⚙️ Test API

You can use our test API for development, which gives the full functionality of the main API.

## Complete solution

If you don't need or don't want to run a test API on your computer. Then you can use our ready-made solution - https://api.dev.durudex.com.

## Start

To start you need to have Docker on your PC.

```sh
# Clone repository.
git clone https://github.com/durudex/durudex-test-api.git

# Change directory.
cd durudex-test-api

# Create environment file.
touch .env
```

You need to edit `.env` file as shown here:
```env
API_PORT=8000
```

To start you need to enter this command in the terminal `make`. Тепер ви можете відчинити [localhost:8000](http://localhost:8000).

## Usage

We use GraphQL for server interaction. You can use query editors for test queries. If you need a direct link for queries, add `/query` to the main link.

Request to create an account:
```graphql
mutation {
  signUp(input: {
    username: "example",
    email: "example@durudex.com"
    password: "qwerty",
    code: "111111"
  })
}
```


## Docker container

You can also use a ready-made docker container
[v1def/durudex-test-api](https://hub.docker.com/repository/docker/v1def/durudex-test-api).

#### Samples of using container:

+ [durudex/durudex-test-api](https://github.com/durudex/durudex-test-api/tree/main/deploy)

## Incorrect input

If you need to get error from server, then you need to enter the following input:

+ Email - `false@false.false`
+ Code - `0`
+ Other - `false`

Example of false input:
```graphql
mutation {
  signIn(input: {
    username: "false",
    password: "false",
  }) {
    access
    refresh
  }
}
```
