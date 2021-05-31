$(function () {
  $("#submit").on("click", function () {
    id = "";
    title = $("#page_title").val();
    contents = $("#contents").val();
    api("newPage", title, contents);
  });
});

function insert_api(type, t, c) {
  result = "";
  $.ajax({
    type: "POST",
    url: "",
    data: { eventType: type  },
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

function api(type, t, c) {
  result = "";
  $.ajax({
    type: "POST",
    url: "",
    data: { eventType: type, blog: { title: t, contents: c } },
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
