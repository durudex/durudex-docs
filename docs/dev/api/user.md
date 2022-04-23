---
sidebar_position: 2
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

To receive a verification code, you must submit the following request:

```graphql
mutation {
  getCodeByEmail(input: {email: "example@durudex.com"})
}
```

A message with a confirmation code will be sent to the e-mail.

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

## Authentication

Authentication is required in some requests in order to recognize the user. To do this, we have
two tokens are used, `access` and `refresh`.

**Access** - it is a JWT token that is valid for a small amount of time. It is used in queries
who need authentication.

**Refresh** - is a token used to update the access token.

Request to update access token:
```graphql
mutation {
  refreshToken(input: {token: "you-refresh-token"})
}
```

To send a request that requires authentication, you need to add an http header:

```json
{
  "Authorization": "Bearer you-access-token"
}
```

## Sign Out

In order to log out of your account, you need to refresh the token and be authenticated.

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

To get a verification code, you need to use `getCodeByEmail()`.

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
  getUser(id: "user-id") {
    username
    avatarUrl
    createdAt
    ...
  }
}
```
