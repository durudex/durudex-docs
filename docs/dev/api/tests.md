---
sidebar_position: 1
---

# ⚙️ Test API

You can use our test API for development, which gives the full functionality of the main API.

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

To start you need to enter this command in the terminal `make`.

## Usage

We use GraphQL to interact with the server. To go to the web query editor, you need to open this in your browser **[localhost:8000](http://localhost:8000)**.

Sample request to check the work:
```graphql
query {
  ping
}
```

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

+ Email - **false@false.false**
+ Code - **0**
+ Other - **false**

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
