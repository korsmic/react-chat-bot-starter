# ReactRecomendChatBot
---
## command

### npm
- `npm start`
  - dev用コマンド
  - `http://localhost:8080/`に立ち上がる
- `npm run build`
  - `bundle.js`がrootに出力される

---
## 構成
- `chat_history`に会話ログを格納
- `chat_message_composer`で管理を行う
  - `loc`には各パーツのComponentを格納
  - `_bot_component`では、botの返信の内容を格納

---
---