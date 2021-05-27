$(function () {
  result = JSON.parse(api("all"));
  $("#newinfo_hdr").append(result["result"]);
  $(".blog").on("click", function () {
    localStorage.setItem("data", $(this).parent().attr("id"));
  });
});

function dt_dom(data) {
  data.forEach((e) => {
    temp = e.title;
    c = e.create_timestamp;
    <a href="../page.html" class="blog"></a>;
    $("#newinfo").append(
      "<dt>" +
        c +
        '</dt><a href="../page.html" class="blog"><dd>' +
        temp +
        "</dd></a>"
    );
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
