window.onload = function (){
    getCourse();
}

function getCourse() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/detail/find/WAIT",
        success: function (data) {
            let c = `<div id="courseList">`;
            for (let i = 0; i < data.length; i++) {
                c += `<div class="N-block"> <span class="d-left">District<br>
                                    ${data[i].course.district.name}
                                    </span> <font color="#000" size="+1"><a href="chitietkhoahoc.html">${data[i].description}</a>
                                    </font> </div>
                                    <hr>`;
                // <a href="chitietkhoahoc.html">${data[i].description}</a>
            }
            c += `</div>`;
            document.getElementById("courseList").innerHTML = c;
        }
    });
}

