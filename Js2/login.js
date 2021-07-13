window.onload = function () {

    showInfomation();
}

function login1(){
    let form=$('#formLogin')[0];
    let data = new FormData(form);
    console.log("da vao function")
    console.log(data)
    $.ajax({
        url: "http://localhost:8080/api/auth/login",
        type: 'POST',
        data: data,
        async: false,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (user) {
            console.log(user)
            if (user =="Login fail"){
                alert(user)
            }else {
                alert("Đăng nhập thành công");
                localStorage.setItem("id", user.id);
                localStorage.setItem("name", user.name);
                localStorage.setItem("role", user.role);
                localStorage.setItem("image", user.image);
                // window.open("trangcanhan.html");

                let role = localStorage.getItem("role")
                switch (role){
                    case "STUDENT":
                        window.location= "trangcanhan.html";
                    case "TEACHER":
                        window.location= "trangcanhan.html";
                    case "ADMIN":
                        window.location= "trangcanhan.html";
                }

            }

        }
    });
}

function logout2(){

    localStorage.setItem("id", null);
    localStorage.setItem("name", null);
    localStorage.setItem("role", null);
    localStorage.setItem("image", null);
    window.location= ("index.html");
}

function checkLogin(){
    let id = localStorage.getItem("id");
    if(id == null){
        alert("Bạn phải đăng nhập để sử dụng tính năng");
    }
}

function showInfomation(){
    let image = localStorage.getItem("image");
    let name = localStorage.getItem("name");
    let c="";
    c+= `<img className="media-object img-thumbnail user-img" style="height: 80px;" alt="User Picture"
             src="./image/${image}" >
        <br>
        <span> ${name}</span>`

    document.getElementById("imageOfUser").innerHTML = c;
}