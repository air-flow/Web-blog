$(function () {
  result = JSON.parse(api("all"));
  $("#newinfo_hdr").append(result["result"]);
});

function dt_dom(data) {
  data.forEach((e) => {
    temp = e.title;
    c = e.create_timestamp;
    $("#newinfo").append("<dt>" + c + "</dt><dd>" + temp + "</dd>");
  });
}
<dl id="newinfo">
</dl>


<h2>name</h2>
<dl id="newinfo">
<dt>2017/02/17</dt>
  <dd>初心者向け無料ホームページテンプレートtp_beginner2公開。</dd>

</dl>
function dt_dom(data) {
    data.forEach((e) => {
      temp = e.title;
      c = e.create_timestamp;
      $("#newinfo").append("<dt>" + c + "</dt><dd>" + temp + "</dd>");
    });
  }

function api(type) {
  result = "";
  $.ajax({
    type: "GET",
    url: "",
    data: { eventType: type },
    dataType: "json",
    async: false,
  })
    .done(function (data) {
      // 通信成功時の処理を記述
      console.log(data);
      result = data;
    })
    .fail(function (data) {
      // 通信失敗時の処理を記述
      console.log(data);
    });
  return result;
}
