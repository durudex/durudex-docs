---
sidebar_position: 2
title: ⚙️ Тестове API
description: Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.
---

# ⚙️ Тестове API

Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.
Зверніть увагу, що дані які вам повертає сервер не є реальними. Кожного разу при одинакових запитах
дані будуть різні.

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
# Debug mode.
DEBUG=false

# Config variables:
CONFIG_PATH=configs/main

# Auth variables:
JWT_SIGNING_KEY=
```

Для запуску вам потрібно ввести в термінал `make`. Тепер ви можете відчинити [localhost:8000](http://localhost:8000).

## Використання

Ми використовуємо мову запитів GraphQL для взаємодії з сервером. Для пробних запитів ви можете використовувати
редакток запитів. Якщо вам потрібне пряме посилання для запитів, то додайте `/query` до основого посилання.

:::tip
Пряме посилання до API приймає тільки POST запити.
:::

## Docker контейнер

Також ви можете використовувати готовий docker контейнер 
[durudex/durudex-test-api](https://hub.docker.com/repository/docker/durudex/durudex-test-api).

#### Приклади використання контейнера:

- [durudex/durudex-test-api](https://github.com/durudex/durudex-test-api/tree/main/deploy)

## Конфігурація

Для налаштування тестового API вам потрібно перейти в `configs/` і створити або відредагувати існуючий
файл конфігурації.

Приклад файла конфігурації:

```yml title=main.yml
http:
  host: "api.test.durudex.com"
  port: 8000
  name: "Durudex Test API"

auth:
  ttl: 15m # JWT access token ttl
```

:::caution
Для зміни файла конфігурації вам потрібно змінити `CONFIG_PATH=you-path` в `.env`.
:::
