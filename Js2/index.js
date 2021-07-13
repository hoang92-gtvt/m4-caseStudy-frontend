window.onload = function () {
    showImageIndex();
    // getIdTeacher()
}
// function showImageIndex(){
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/api/user/findByRole/2",
//         success: function (data) {
//             console.log(data);
//             let c = `<div id="image_index">`;
//             for (let i = 0; i < data.length; i++) {
//                 c +=`
//                                 <h4>${data[i].name}</h4> <img src="./image/${data[i].avatar}" alt="image">
//                     <p> ${data[i].description} </p>
//                     <a href="#">
//                         <button class="see-more" type="button">Xem chi tiết</button>
//                     </a>`;
//             }
//             c+=`</div>`
//             document.getElementById("image_index").innerHTML = c;
//         }
//     });
//
// }

function showImageIndex() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/user/findByRole/2",
        success: function (data) {
            console.log(data);
            let c = "";
            for (let i = 0; i < data.length; i++) {
                c +=
                        `<div class="col-md-4" style="float: left">
                            <div class="chairman-message" >
                                <h4>${data[i].name}</h4> <img src="./image/${data[i].avatar}" alt="image">
                                <p>${data[i].description} </p>
                                <a href="yeucaugiasu.html">
                                    <button class="see-more" type="button" value="${data[i].id}" onclick="getIdTeacher(this)">Mời Dạy</button>
                                </a>
                            </div>
                        </div>`

            }
            document.getElementById("test").innerHTML = c;
        }
    });

}
// function getIdTeacher(b){
//     let id_teacher = b.getAttribute('value');
//     let id = localStorage.getItem("id");
//     let c="";
//     c+= `
//         <input type="text" className="numberOnly" autoComplete="off" maxLength="13"
//                 name="userTeacher" value="${id_teacher}"
//                data-original-title="" title="">`
//     document.getElementById("teacher_yeucau").innerHTML =c;
//
//     let c1="";
//     c1+= `
//                             <!--                            <p class="p-create-class-title">Học phí dự kiến (vnđ/buổi) <span-->
//                             <!--                                    class="class-field-alert">*</span></p>-->
//                             <input type="text" class="num" autocomplete="off" maxlength="13"
//                                    placeholder="Ví dụ:250,000" name="p"  value="${id}"
//                                    data-original-title="" title="">`
//     document.getElementById("student_yeucau").innerHTML =c1;
//
//
// }



