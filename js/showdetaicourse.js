window.onload = function (){
    getCourse();
}

function getCourse() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/detail/find/WAIT",
        success: function (data) {
            let c = `<div id="list_course">`;
            for (let i = 0; i < data.length; i++) {

                c += `<span class="d-left">Aug<br>26</span>
                      <a href="#">${data[i].description}</a>`;
            }
            c += `</div>`;
            document.getElementById("list_course").innerHTML = c;
        }
    });
}

