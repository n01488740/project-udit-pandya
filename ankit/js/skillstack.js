$(document).ready(function () {
  $("#load_button").show();
  $("#loading_message").hide();

  $("#load_button").click(function () {
    $("#loading_message").fadeIn();
    $("#load_button").hide();

    var url = "https://random-data-api.com/api/users/random_user?size=10";

    $.getJSON(url, function (data) {
      $("#loading_message").fadeOut();
      let html = "";

      for (var i = 0; i < data.length; i += 2) {
        console.log(`${i} ${data.length} ${i < data.length}`);

        html += `<div class="endorsement_row">`;
        html += `<div class="endorsement_item">
              <img src="${data[i].avatar}" />
              <div class="sub_section">
                <p>
                  “My user name is ${data[i].username}. I had a great experience with Ankit. I was a bit
                  worried about implementation, but it wasn’t a problem at all. I
                  love using [product name] when I’m [best use scenario].”
                </p>
                <h4>${data[i].first_name} ${data[i].last_name}</h4>
              </div>
            </div>`;

        if (i < data.length) {
          html += `<div class="endorsement_item">
            <img src="${data[i + 1].avatar}" />
            <div class="sub_section">
              <p>
                ““My user name is ${
                  data[i + 1].username
                }. I had a great experience with Ankit. I was a bit
                worried about implementation, but it wasn’t a problem at all. I
                love using [product name] when I’m [best use scenario].”
              </p>
              <h4>${data[i + 1].first_name} ${data[i + 1].last_name}</h4>
            </div>
          </div>`;
        }
        html += "</div>";
      }

      $("#section_info_container").html(html);
    });
  });
});
