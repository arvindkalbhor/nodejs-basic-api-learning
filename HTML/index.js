$("#getData").click(function () {
  // alert("Clicked")
  fetch("http://localhost:3000/users/3")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $("#user-id").html(data.id);
      $("#user-name").html(data.name);
    });
});

$("#create-user").click(function () {
  let data = {
    name:'sonya'
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/create-user",
    data: data,
    success: function (resp) {
      // Do something with fake data
    },
  });
});


$("#delete-user").click(function () {
    $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/delete-user/3",
      success: function (resp) {
        // Do something with fake data
      },
    });
  });

  
$("#update-user").click(function () {
    let data = {
      id:'2',
      name:'arvind kalbhor'
    };
  
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/update-user",
      data: data,
      success: function (resp) {
        // Do something with fake data
      },
    });
  });
