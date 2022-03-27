---
sidebar_position: 1
---

# ⚙️ Тестове API

Для розробки ви можете використовувати наше тестове API, яке дає повний функціонал головного API.

## ▶️ Запуск

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

## 🖥 Використання

Ми використовуємо мову запитів GraphQL для взаємодії з сервером. Щоб перейти до веб редактора запитів, вам 
потрібно відчинити в блаузері **[localhost:8000](http://localhost:8000)**.

Зразок запиту для перевірки роботи:
```graphql
query {
  ping
}
```

Запит для створення акаунта:
```graphql
mutation {
  signUp(input: {
    username: "example",
    email: "example@durudex.com"
    password: "qwerty",
    code: "000000"
  })
}
```

## 🐋 Docker контейнер

Також ви можете використовувати готовий docker контейнер 
[v1def/durudex-test-api](https://hub.docker.com/repository/docker/v1def/durudex-test-api).

[Приклад використання](https://github.com/durudex/durudex-test-api/tree/main/deploy)
