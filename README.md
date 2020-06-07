# タイトル：Soup (子ども食堂交流コミュニティサイト)

就職活動用のポートフォリオとして制作した自作アプリです。<br />
お気に入りの子ども食堂を投稿でき、その他いいねやフォローなどの基本的な機能も実装しています。まだデプロイできておりませんが、開発環境にDocker、インフラにAWSを使用していく予定です。

![soup-preview](https://i.gyazo.com/665a3a8ea2f5364d56d54f8037667932.mp4)

## 制作背景

こども食堂とは、地域住民や自治体が主体となり、無料または低価格帯で子どもたちに食事を提供するコミュニティの場を指します。単に「子どもたちの食事提供の場」としてだけではなく、帰りが遅い会社員、家事をする時間のない家族などが集まって食事をとることも可能です。
しかし、子ども食堂の認知はまだまだ低く「得体の知れない場所」になっているため、支援の必要な家庭に普及できていません。そのため、カフェ感覚でフラットに参加してもいいことをアピールするために今回のアプリを作成しました。

## URL
デプロイはまだ完了しておりません。機能がある程度完成し、AWSの学習が終了したら追記いたします。

* ログインページから【テストユーザー】として簡単ログインできるように設定しております。

## 使用技術
* Ruby 2.5.1, Rails 5.0.7
* MySQL 5.6.47
* Puma
* haml, Scss
* bulma,bootstrap3（ボタン,ページネーションなど）
* JQuery
* refile、carrierwave （画像アップロード）

## AWS構成図
デプロイ後に追記いたします。

## 機能一覧
- ユーザー機能（新規登録、ログイン、ログアウト機能）
  - deviseを使用
  - かんたんログイン
- 記事関係の機能
  - 記事投稿、記事詳細ページ、記事編集など
- コメント機能
  - コメント表示、コメント投稿、コメント削除機能
- ページネーション機能
  - kaminari + bootstrap3 を使用
- いいね機能(Ajaxによる非同期通信)
  - いいねのランキング機能
- フォロー機能(Ajaxによる非同期通信)
  - フォロー、フォロワー一覧表示機能
- 投稿記事の検索機能

## 課題、今後実装したい機能
* RSpecでテストを充実させる
* 通知機能、DM機能、ransackによる検索機能を追加
* AWSによるデプロイ、docker、CircleCi CI/CDを使用する