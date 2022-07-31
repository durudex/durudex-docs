---
sidebar_position: 1
title: 📕 Introduction
description: Here is the basic information for working with the Durudex API.
---

# 📕 Introduction

Here is the basic information for working with the Durudex API.

## Errors

API requests can return various errors. This is done about incorrect server queries or errors.

Example of an error:

```json
{
  "errors": [
    {
      "message": "Error Message",
      "extensions": {
        "code": "ERROR_CODE"
      }
    }
  ],
  "data": null
}
```

## Error codes

The following error codes may be returned to you:

```json title=codes.json
{
  "SERVER_ERROR": "Server error",
  "INTERNAL_SERVER_ERROR": "Internal server error",
  "INVALID_ARGUMENT": "Invalid argument",
  "NOT_FOUND": "Not found",
  "ALREADY_EXISTS": "Already exists",
  "COMPLEXITY_LIMIT_EXCEEDED": "Request complexity level exceeded",
  "GRAPHQL_VALIDATION_FAILED": "GraphQL query validation error"
}
```

:::tip
A complete list of codes can be found in [durudex/durudex-assets](https://github.com/durudex/durudex-assets/blob/main/api/codes.json)
:::

## Complexity

When sending heavy requests to the API, the server may return a `COMPLEXITY_LIMIT_EXCEEDED` error. This means that
the query complexity exceeds the specified limit and you need to simplify the query.

Example of an error:

```json
{
  "errors": [
    {
      "message": "operation has complexity 1000, which exceeds the limit of 500",
      "extensions": {
        "code": "COMPLEXITY_LIMIT_EXCEEDED"
      }
    }
  ],
  "data": null
}
```
