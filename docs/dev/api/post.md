---
sidebar_position: 4
title: Post
description: Here is interesting information about working with posts in our API.
---

# 📄 Post

Here is interesting information about working with posts in our API.

## Create

Для створення нового допису вам потрібно бути авторизованому. Також вам знадобляться такі дані:

+ Text - Головний текст вашого допису.

Запит для створення нового допису:

```graphql
mutation {
  createPost(input: {text: "Hello Durudex!"})
}
```

## Delete

Для видалення допису вам потрібно бути авторизованому.

Запит для видалення допису:

```graphql
mutation {
  deletePost(id: "post-id")
}
```

## Update

Для оновлення допису вам потрібно бути авторизованому.

Запит для оновлення допису:

```graphql
mutation {
  updatePost(input: {
    id: "post-id",
    text: "Durudex to the moon"
  })
}
```

## Get

Запит для отримання допису:

```graphql
query {
  post(id: "post-id") {
    text
    createdAt
    author {
      id
    }
  }
}
```
