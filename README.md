# Nanny - my mentor. Пользовательский интерфейс

## 📦 Требования
- Docker (версия 20.10+)

## 🛠 Установка
1. Клонируйте репозиторий:
   ```bash
    git clone https://github.com/kArteraa/Nanny.git
2. Перейдите в папку с проектом:
   ```bash
   cd ""Название папки""

## 🐳 Запуск в Docker
### Сборка образа и запуск контейнера
    docker build -t nanny-image .
    docker run -d -p 3000:3000 --name nanny-container nanny-image

### Остановка контейнера
    docker stop nanny-container