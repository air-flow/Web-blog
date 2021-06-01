$(function () {
  id = localStorage.getItem("newdata");
  if (typeof id === "undefined") {
    
  }
  $("#submit").on("click", function () {
    if (typeof id === "undefined") {
      d = {
        eventType: type,
        title: $("#page_title").val(),
        sentense: $("#contents").val(),
      };
      api(d);
    } else {
      d = {
        eventType: type,
        title: $("#page_title").val(),
        sentense: $("#contents").val(),
        blogId: id,
      };
      api(d);
    }
  });
});

function insert_api(d) {
  result = "";
  $.ajax({
    type: "POST",
    url: "",
    data: JSON.stringify(d),
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
