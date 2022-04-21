---
sidebar_position: 1
title: ⚙️ Тестове API
description: Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.
---

# ⚙️ Тестове API

Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.

## Готове рішення

Якщо вам не потрібно, або ви не хочете запускати в себе на компютері додаток тестового API. То ви можете
використати наше готове рішення - https://api.dev.durudex.com.

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

Для запуску вам потрібно ввести в термінал `make`. Тепер ви можете відчинити [localhost:8000](http://localhost:8000).

## Використання

Ми використовуємо мову запитів GraphQL для взаємодії з сервером. Для пробних запитів ви можете використовувати
редакток запитів. Якщо вам потрібне пряме посилання для запитів, то додайте `/query` до основого посилання.

## Docker контейнер

Також ви можете використовувати готовий docker контейнер 
[v1def/durudex-test-api](https://hub.docker.com/repository/docker/v1def/durudex-test-api).

#### Приклади використання контейнера:

+ [durudex/durudex-test-api](https://github.com/durudex/durudex-test-api/tree/main/deploy)

## Хибні вхідні дані

Якщо ви хочете отримати помилку від сервера, то вам потрібно ввести такі вхідні дані:

+ Емейл - `false@false.false`
+ Код - `0`
+ Інше - `false`

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
