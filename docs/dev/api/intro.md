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
  "SERVER_ERROR": "Server error.",
  "INTERNAL_SERVER_ERROR": "Internal server error.",
  "INVALID_ARGUMENT": "Invalid argument."
}
```
