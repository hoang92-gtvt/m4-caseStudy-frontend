function changeViewSubject(){

    $.ajax({
        type:"GET",


        url: "http://localhost:8080/api/subject",
        success: function (subjectList){
            console.log("in ra mang mang ", subjectList )

            let c="";
            c+= '<select className="form-control"  id="user_subject" name="subjects"  style="width: 100px" multiple>'
                 for (let i = 0; i < subjectList.length; i++) {

                c+= `<option value="${subjectList[i].id}">${subjectList[i].name}</option>`
            }
            c+='</select>'
            document.getElementById("subjectList").innerHTML= c;

        }
    });
}

window.onload = function () {
    changeViewSubject();
}


function studentView(){
    document.getElementById("foldOptional").style.display="none";
}

function teacherView(){
        document.getElementById("foldOptional").style.display="block";

}

function addUser(){
    let role= $('.role_user').val();
    console.log(role);
    let name= $('#user_name').val();
    let username=$('#user_username').val();
    let password=$('#user_password').val();
    let email=$('#user_email').val();
    let phone=$('#user_phone').val();
    let address=$('#user_addr').val();
    let description=$('#user_des').val();
    let certificate=$('#user_cer').val();

    let subjects=$('#user_subject').val();

    let form=$('#newUserForm')[0];
    let data = new FormData(form);

    // data.append("message","tap doi tuong thanh cong");

    // disabled the submit button
    // $("#btnSubmit").prop("disabled", true);

    console.log(data)

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