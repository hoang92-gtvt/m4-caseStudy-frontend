window.onload = function (){
    getCourse();
}

function getCourse() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/course",
        success: function (data) {
            console.log(data);
            let c = `<div id="check1">`;
            for (let i = 0; i < data.length; i++) {
                c +=`  
                                        <div class="N-block"> <span class="d-left">Quận<br>
    ${data[i].district.name}
    </span> <font color="#000" size="+1"><a href="#"
     onclick="detailCourse()" class="${data[i].id}" >${data[i].description}</a></font> </div>
                                        <hr>`;
            }
            c+=`</div>`
            document.getElementById("check1").innerHTML = c;
        }
    });
}

function detailCourse(a){
    let id = localStorage.getIte(id);



}
