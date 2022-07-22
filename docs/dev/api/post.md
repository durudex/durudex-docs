---
sidebar_position: 4
title: 📄 Post
description: Here is interesting information about working with posts in our API.
---

# 📄 Post

Here is interesting information about working with posts in our API.

## Create post

You need to be authorized to create a new post. You will also need the following information:

+ `text` - The main text of your post

Request to create a new post:

```graphql
mutation {
  createPost(input: {text: "Hello Durudex!"})
}
```

## Delete post

You need to be authorized to delete your post.

Request to delete a post:

```graphql
mutation {
  deletePost(id: "post-id")
}
```

## Update post

You need to be authorized to update your post.

Request to update a post:

```graphql
mutation {
  updatePost(input: {
    id: "post-id",
    text: "Durudex to the moon 🚀"
  })
}
```

## Get post

Request to get a post using id:

```graphql
query {
  post(id: "post-id") {
    text
    author {
      id
    }
  }
}
```

## Get user posts

Arguments `posts()`:

+ `first` - Returns the first n elements from the list

+ `last` - Returns the last n elements from the list

Request to get a list of user posts:

```graphql
query {
  user(id: "user-id") {
    posts(first: 10) {
      nodes {
        id
        text
        attachments
      }
    }
  }
}
```
