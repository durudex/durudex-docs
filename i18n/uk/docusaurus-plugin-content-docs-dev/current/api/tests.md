---
sidebar_position: 1
title: ⚙️ Тестове API
description: Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.
---

# ⚙️ Тестове API

Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.

## Запуск

Щоб запустити, у вас повинен бути встановлений Docker.

```sh
# Clone repository.
git clone https://github.com/durudex/durudex-test-api.git

# Change directory.
cd durudex-test-api

# Create environment file.
touch .env
```

Потрібно відредагувати `.env` файл по даному прикладу:
```env
API_PORT=8000
```

Для запуску вам потрібно ввести в термінал `make`.

## Використання

Ми використовуємо мову запитів GraphQL для взаємодії з сервером. Щоб перейти до веб редактора запитів, вам 
потрібно відчинити в блаузері **[localhost:8000](http://localhost:8000)**.

Запит для створення акаунта:
```graphql
mutation {
  signUp(input: {
    username: "example",
    email: "example@durudex.com"
    password: "qwerty",
    code: "111111"
  })
}
```

## Docker контейнер

Також ви можете використовувати готовий docker контейнер 
[v1def/durudex-test-api](https://hub.docker.com/repository/docker/v1def/durudex-test-api).

#### Приклади використання контейнера:

+ [durudex/durudex-test-api](https://github.com/durudex/durudex-test-api/tree/main/deploy)

## Хибні вхідні дані

Якщо ви хочете отримати помилку від сервера, то вам потрібно ввести такі вхідні дані:

+ Емейл - **false@false.false**
+ Код - **0**
+ Інше - **false**

Приклад хибного запиту:
```graphql
mutation {
  signIn(input: {
    username: "false",
    password: "false",
  }) {
    access
    refresh
  }
}
```
