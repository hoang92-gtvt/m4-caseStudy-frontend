window.onload = function (){
    showImageIndex();
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

function showImageIndex(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/user/findByRole/2",
        success: function (data) {
            console.log(data);
            let c = `<div id="image_index">`;
            for (let i = 0; i < data.length; i++) {
                c +=`  
                               <section class="details-corner">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="chairman-message">
                        <h4>${data[i].name}</h4> <img src="./image/${data[i].avatar}" alt="image">
                        <p>${data[i].description} </p>
                        <a href="yeucaugiasu.html">
                            <button class="see-more" type="button" value="${data[i].id}">Mời Dạy</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
            }
            c+=`</div>`
            document.getElementById("image_index").innerHTML = c;
        }
    });

}

