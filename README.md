## 実装予定
### 計測画面
・各画面にホームに戻るを追加する

・recordが押下された時に記録した時間の合計を表示できるようにする。
・removeが押下された時に記録した時間の合計を表示できるようにする。

・removeは記録した時間がある時のみ押下可能とする
→alertでどこで実装できるか確認した方がいいよ
・recordも画面の時計が0秒以上の時のみ押下可能とする
→alertでどこで実装できるか確認した方がいいよ
・Time Recordsを1つずつ削除できるようにする

### ログイン画面
・google認証を付け加える
・計測画面もしくは勉強時間一覧の選択ができる画面を用意する。

### google DB接続
・名前を画面で常に表示できるようにする。
・月毎に、日付ごとの勉強時間を表示できるようにする。
・日付ごとの記録をできるようにする

### 構成
・最初から作り直した方がいいよ
・stopwatch.ts
・record.ts
・App.js 本体の画面作り

### アラーム機能追加

### 全画面
・画面下に、Homeへ戻る・勉強時間一覧・休憩アラームに遷移できるボタンを設置して実装する# study-tool
