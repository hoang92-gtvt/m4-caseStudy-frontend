window.onload = function (){
    getCourse();
    getCourseOnYeuCauGiaSu();
    setIdforDetail()
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


function  getCourseOnYeuCauGiaSu() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/course",
        success: function (data) {
            let c = `<div id="khoa_hoc">`;
            c += `<select name="course" id="course-class">`;
            for (let i = 0; i < data.length; i++) {
                c += `<option value="">${data[i].description}</option>`;
            }
            c += `</select>`;
            c += `</div>`;
            document.getElementById("khoa_hoc").innerHTML = c;
        }
    });
}


function setIdforDetail(){
    let id = localStorage.getItem("id");
    let id_teacher= localStorage.getItem("id_teacher");
    let c="";
    c+= `
        <input type="text" className="numberOnly" autoComplete="off" maxLength="13"
                name="userTeacher" value="${id_teacher}"
               data-original-title="" title="">`
        document.getElementById("teacher_yeucau").innerHTML =c;

    let c1="";
    c1+= `
                            <!--                            <p class="p-create-class-title">Học phí dự kiến (vnđ/buổi) <span-->
                            <!--                                    class="class-field-alert">*</span></p>-->
                            <input type="text" class="num" autocomplete="off" maxlength="13"
                                   placeholder="Ví dụ:250,000" name="p"  value="${id}"
                                   data-original-title="" title="">`
    document.getElementById("student_yeucau").innerHTML =c1;

}
