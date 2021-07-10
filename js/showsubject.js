window.onload = function () {
    getSubject();
}

function getSubject() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/subject",
        success: function (data) {
            let c = `<div id="list_subject">`;
            c += `<select name="subject" id="subject-class">`;
            for (let i = 0; i < data.length; i++) {
                c +=`<option value="${data[i].id}">${data[i].name}</option>`;
            }
            c+=`</select>`;
            c += `</div>`;
            document.getElementById("list_subject").innerHTML = c;
        }
    });
}

