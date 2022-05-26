---
sidebar_position: 4
title: Post
description: Here is interesting information about working with posts in our API.
---

# 📄 Post

Here is interesting information about working with posts in our API.

## Create

You need to be authorized to create a new post. You will also need the following information:

+ Text - The main text of your post.

Request to create a new post:

```graphql
mutation {
  createPost(input: {text: "Hello Durudex!"})
}
```

## Delete

You need to be authorized to delete your post.

Request to delete a post:

```graphql
mutation {
  deletePost(id: "post-id")
}
```

## Update

You need to be authorized to update your post.

Request to update a post:

```graphql
mutation {
  updatePost(input: {
    id: "post-id",
    text: "Durudex to the moon"
  })
}
```

## Get

Request to get a post using id:

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
