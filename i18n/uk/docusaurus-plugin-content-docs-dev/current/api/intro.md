---
sidebar_position: 1
title: 📕 Вступ
description: Тут знаходиться базова інформація для роботи з API Durudex.
---

# 📕 Вступ

Тут знаходиться базова інформація для роботи з API Durudex.

## Помилки

Запити до API можуть повертати різні помилки. Це свідчить про неправельні запити, або помилки сервера.

Приклад поверненої помилки:
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

## Коди помилок

Вам можуть бути повернені такі коди помилок:

```json title=codes.json
{
  "SERVER_ERROR": "Помилка сервера.",
  "INTERNAL_SERVER_ERROR": "Внутрішня помилка сервера.",
  "INVALID_ARGUMENT": "Недійсний аргумент.",
  "NOT_FOUND": "Не знайдено.",
  "ALREADY_EXISTS": "Вже існує."
}
```