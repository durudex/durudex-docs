---
sidebar_position: 2
title: ⚙️ Test API
description: You can use our test API for development, which gives the full functionality of the main API.
---

# ⚙️ Test API

You can use our test API for development, which gives the full functionality of the main API. 
The data returned to you by the server is not real. The data will be different each time with the same requests.

## Complete solution

If you don't need or don't want to run a test API on your computer. Then you can use our ready-made solution - https://api.dev.durudex.com.

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
# Debug mode.
DEBUG=false

# Config variables:
CONFIG_PATH=configs/main

# Auth variables:
JWT_SIGNING_KEY=
```

To start you need to enter this command in the terminal `make`. Now you can open [localhost:8000](http://localhost:8000).

## Usage

We use GraphQL for server interaction. You can use query editors for test queries. If you need a direct link for queries, add `/query` to the main link.

:::tip
A direct link to the API only accepts POST requests.
:::

## Docker container

You can also use a ready-made docker container
[durudex/durudex-test-api](https://hub.docker.com/repository/docker/durudex/durudex-test-api).

#### Samples of using container:

+ [durudex/durudex-test-api](https://github.com/durudex/durudex-test-api/tree/main/deploy)
