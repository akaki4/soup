$(document).on('turbolinks:load', function () {
  $(function () {
    // 画像をプレビュー表示させる.prev-contentを作成
    function buildHTML(profile_image) {
      var html =
        `
        <div class="profile-prev-content">
          <img src="${profile_image}", alt="profile-preview" class="attachment user profile_image profile-image">
        </div>
        `
      return html;
    }
    // 画像が選択された時に発火します
    $(document).on('change', '.hidden_file', function () {
      // .file_filedからデータを取得して変数fileに代入します
      var file = this.files[0];
      // FileReaderオブジェクトを作成します
      var reader = new FileReader();
      // DataURIScheme文字列を取得します
      reader.readAsDataURL(file);
      // 読み込みが完了したら処理が実行されます
      reader.onload = function () {
        // 読み込んだファイルの内容を取得して変数imageに代入します
        var profile_image = this.result;
        // プレビュー画像がなければ処理を実行します
        if ($('.profile-prev-content').length == 0) {
          // 読み込んだ画像ファイルをbuildHTMLに渡します
          var html = buildHTML(profile_image)
          // 作成した.prev-contentをiconの代わりに表示させます
          $('profile-prev-contents').prepend(html);
          // 画像が表示されるのでiconを隠します
          $('.profile-default-image').hide();
        } else {
          // もし既に画像がプレビューされていれば画像データのみを入れ替えます
          $('.profile-prev-content .profile-image').attr({ src: profile_image });
        }
      }
    });
  });
});
