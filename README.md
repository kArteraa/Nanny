# Nanny — Приложение-наставник студента

Интерактивное фронтенд-приложение, разработанное на **Next.js**, с возможностью управления виджетами (Календарь, Заметки, Задачи) прямо из чата. Хранение состояния реализовано с помощью **Zustand**, стили — на **SCSS**, тестирование — через **Jest**.

---

## Возможности

- Адаптивный и интерактивный интерфейс
- Хранение состояния между сессиями
- Добавление задач, заметок и календаря из чата
- Юнит и snapshot тесты (Jest + React Testing Library)

---

## Требования

- Node.js `>=18.x`
- npm / yarn / pnpm
- Docker (для контейнерного запуска)

---

## Запуск проекта локально

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/kArteraa/Nanny.git
   cd Nanny

2. Установить зависимости
    ```bash
   # npm
    npm install
    
    # или yarn
    yarn
    
    # или pnpm
    pnpm install
   ```

3. Запустить проект
   ```bash
   npm run dev

4. Открыть в браузере
    ```arduino
   http://localhost:3000
   ```

# Запуск через Docker

## Требования
- Docker (версия 20.10+)

## Установка
1. Клонируйте репозиторий:
   ```bash
    git clone https://github.com/kArteraa/Nanny.git
2. Перейдите в папку с проектом:
   ```bash
   cd ""Название папки""

## Запуск в Docker
### Сборка образа и запуск контейнера
    docker build -t nanny-image .
    docker run -d -p 3000:3000 --name nanny-container nanny-image

### Остановка контейнера
    docker stop nanny-container

## Основные npm скрипты

| Скрипт               | Назначение                        |
| -------------------- | --------------------------------- |
| `npm run dev`        | Запуск в режиме разработки        |
| `npm run build`      | Сборка production-версии          |
| `npm run start`      | Запуск production-версии          |
| `npm run lint`       | Проверка кода ESLint              |
| `npm run test`       | Запуск тестов                     |
| `npm run test:watch` | Запуск тестов в режиме наблюдения |

## Стек

- Next.js

- React 19

- Zustand

- SCSS

- FullCalendar

- Jest

- Docker