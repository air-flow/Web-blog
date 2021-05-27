$(function () {
  result = JSON.parse(api("all"));
  $("#newinfo_hdr").append(result["result"]);
});

function p_dom(data) {
  data.forEach((e) => {
    temp = e.name;
    c = e.id;
    $("#newinfo").append("<p id=" + id + ">" + c + "</p>");
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
