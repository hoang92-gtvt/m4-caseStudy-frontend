window.onload = function () {
    getSubject();
    getDistrict();
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

function getDistrict(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/district",
        success: function (data) {
            let c = `<div id="district_id">`;
            c += `<select name="district" id="show_district">`;
            for (let i = 0; i < data.length; i++) {
                c +=`<option value="${data[i].id}">${data[i].name}</option>`;
            }
            c+=`</select>`;
            c += `</div>`;
            document.getElementById("district_id").innerHTML = c;

        }
    });
}

//
// function getGroupName(){
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/api/district",
//         success: function (data) {
//             let c = `<div id="district_id">`;
//             c += `<select name="district" id="show_district">`;
//             for (let i = 0; i < data.length; i++) {
//                 c +=`<option value="${data[i].id}">${data[i].name}</option>`;
//             }
//             c+=`</select>`;
//             c += `</div>`;
//             document.getElementById("district_id").innerHTML = c;
//
//         }
//     });
// }



function createDetailCourse(){
    let nameSubject= $('#user_name').val();

    let form=$('#new_detail_course')[0];
    let data = new FormData(form);
    $.ajax({
        url: "http://localhost:8080/api/user/create",
        type: 'POST',
        data: data,
        async: false,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (response) {
            alert(response);

        }
    });

}

