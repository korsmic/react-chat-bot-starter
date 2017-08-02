# ReactRecomendChatBot
---
## command

### AWSサーバー
- forever
  - `npm run forever`で自動的にサーバーが立ち上がりっぱなしになる
  - `forever list`で現在使用しているforeverの一覧が表示される
  - `forever stop 0000`0000はIDでlist表示させた4桁の数字になる。
- dev
  - `npm run dev`でサーバーが起動
  - `nodemon`が走り続け、コンソールの確認ができる
  - 途中確認に使用。


---
## 構成
- `chat_history`に会話ログを格納
- `chat_message_composer`で管理を行う
  - `loc`には各パーツのComponentを格納
  - `_bot_component`では、botの返信の内容を格納

---
## フロー
- `UI`から`JSON`を`AWSAPI`にPOST
```
{
  sliderA: 4,// A:便利な
  sliderB: 4,// B:静かな
  sliderC: 4,// C:ワイルドな
  sliderD: 4,// D:スタイリッシュな
  sliderE: 4,// E:古風な
  sliderF: 4,// F:開放的な
  sliderG: 4,// G:自然豊かな
  sliderH: 4,// H:格式のある
  sliderI: 4,// I:リラックスできる
  sliderJ: 4,// J:にぎやかな
  sliderK: 4,// k:上品な
  sliderL: 4,// L:隠れ家的な
}
```
- `AWSAPI`で受け取り、`python`へデータを渡す
- `python`でデータを解析し、`AWSAPI`へデータを返す
- `AWSAPI`でデータを受け取り、`UIAPI`へ宿番号をPOST
```
// AWSからUIAPIへは、yIDのみをPOSTする。
{
  yID: "y001"
}
```
- `UIAPI`から`mongoDB`にアクセスして、対象の宿セットを`UIAPI`に返す。
```
{
  yID: yID,
  yImagePath: yImagePath,
  yName: yName,
  yText: yText
}
```
- `UIAPI`から`UI`へデータを返す。
```
{
  yID: yID,
  yImagePath: yImagePath,
  yName: yName,
  yText: yText
}
```
- `UI`でデータを受け取り、出力する。

---
## ver1.0.0 `2017/6/8`
- フロント周りを実装

---