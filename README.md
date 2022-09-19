# ぬめろにむ こんばーた！

## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 🛠️ Build and Setup
```sh
  # build
    docker compose build
    docker compose up
```
以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000

## 💫 Start Node
```sh
  # 起動
    docker compose up
  # 落とす
    docker compose down
```

## 🧸 Other Commands
全て、numeronym-converterを起動した状態で打ってください。  
```sh
  # enter in a docker container
    docker compose exec node sh
  # install packages
    docker compose exec node yarn install
  # formatting
    docker compose exec node yarn format
```
