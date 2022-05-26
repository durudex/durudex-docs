---
sidebar_position: 4
title: 📄 Допис
description: Тут знаходиться цікава інформація, про роботу з дописами в нашому API.
---

# 📄 Допис

Тут знаходиться цікава інформація, про роботу з дописами в нашому API.

## Створити

```graphql
mutation {
  createPost(input: {text: "Hello Durudex!"})
}
```

## Видалити

```graphql
mutation {
  deletePost(id: "post-id")
}
```

## Оновити

```graphql
mutation {
  updatePost(input: {
    id: "post-id",
    text: "Durudex to the moon"
  })
}
```

## Отримати

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
