$(function () {
  $("#new").on("click", function () {
    result = api("new");
    $("#content").append(result);
  });
});

function api(type) {
  result = "";
  $.ajax({
    type: "GET",
    url: "",
    data: JSON.stringify({ eventType: type }),
    dataType: "json",
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
