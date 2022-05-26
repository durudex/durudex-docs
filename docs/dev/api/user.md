---
sidebar_position: 3
title: 🙂 User
description: Here is interesting information about working with users in our API.
---

# 🙂  User

Here is interesting information about working with users in our API.

## Sign Up

You'll need the following information to create a new user account:

+ Username - Unique username
+ Password - Strong password
+ Email - User's email address
+ Code - E-mail confirmation code

You can learn how to get the verification code [here](#get-verification-code).

Request to create an account:

```graphql
mutation {
  signUp(input: {
    username: "example",
    email: "example@durudex.com",
    password: "qwerty",
    code: "123456"
  })
}
```

## Sign In

You will need your credentials to sign in to your account:

+ Username - Your account name
+ Password - Your account password

Request to log in to your account:

```graphql
mutation {
  signIn(input: {
    username: "example",
    password: "qwerty"
  }) {
      access
      refresh
    }
}
```

You will be refunded the authentication tokens of your account

## Authorization

Authorization is required in some requests to control the level of access to resources.
To do this, we have two tokens are used, `access` and `refresh`.

**Access** - it is a JWT token that is valid for a small amount of time. It is used in queries
who need аuthorization.

**Refresh** - is a token used to update the access token.

Request to update access token:
```graphql
mutation {
  refreshToken(input: {token: "you-refresh-token"})
}
```

To send a request that requires authorization, you need to add an http header:

```json
{
  "Authorization": "Bearer you-access-token"
}
```

## Sign Out

In order to log out of your account, you need to refresh the token and be authorized.

Request to sign out:
```graphql
mutation {
  signOut(input: {token: "you-refresh-token"})
}
```


## Forgot password 

If you need to reset your user password, you will need the following information:

+ Email - User's email address
+ Password - New strong user password
+ Code - Code to confirm of the e-mail

You can learn how to get the verification code [here](#get-verification-code).

Request to reset user password:
```graphql
mutation {
  forgotPassword(input: {
    email: "example@durudex.com",
    password: "qwerty",
    code: "123456"
  })
}
```

## Get the user

You can get all the public information about the user.

Request to get a user using id:
```graphql
query {
  user(id: "user-id") {
    username
    avatarUrl
    createdAt
    ...
  }
}
```

## Get verification code

You will need a verification code for some queries. You can get it by sending the following request:

```graphql
mutation {
  createVerifyEmailCode(email: "example@durudex.com")
}
```

The specified e-mail will receive a message with a confirmation code.

:::tip
Use this code as soon as possible, it doesn't last long.
:::
