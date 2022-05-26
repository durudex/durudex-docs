---
sidebar_position: 4
title: Post
description: Here is interesting information about working with posts in our API.
---

# 📄 Post

Here is interesting information about working with posts in our API.

## Create

```graphql
mutation {
  createPost(input: {text: "Hello Durudex!"})
}
```

## Delete

```graphql
mutation {
  deletePost(id: "post-id")
}
```

## Update

```graphql
mutation {
  updatePost(input: {
    id: "post-id",
    text: "Durudex to the moon"
  })
}
```

## Get

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
