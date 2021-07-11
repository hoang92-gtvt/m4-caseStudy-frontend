window.onload = function () {
    changeViewSubject();
    showUserOnList();
    getCourse();
}

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

function getAllUser(){

    $.ajax({
        type:"GET",
        url: "http://localhost:8080/api/user/admin/findAll",
        success: function (userList){
             console.log(userList);

       }
    });


}

function showUserOnList(){
    $.ajax({
        type:"GET",
        url: "http://localhost:8080/api/user/admin/findAll",
        success: function (userList){
            console.log(userList);
            let c="";

            for (let i = 0; i < userList.length; i++) {
             c+= "<tr><td>"+ (1+i)+"</td>"+

            `<td>${userList[i].name}</td>
          
            <td>${userList[i].email}</td>
            <td>${userList[i].phone}</td>
            <td>${userList[i].address}</td>
            <td>${userList[i].description}</td>
            <td>${userList[i].roles.name}</td>
                        
            <td className="icon-tution3782"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span><i
                className="fa fa-trash-o" aria-hidden="true"></i></span>
            </td>`
                    + "</tr>"
            }

            document.getElementById("detailUser").innerHTML= c;

        }
    });


}


function editTeacher(){
    let id ="1";

    $.ajax({
        type:"PUT",
        url: "http://localhost:8080/api/user/admin/findOne/"+ id,
        success: function (user){
            console.log(user);
            let c="";

            for (let i = 0; i < userList.length; i++) {
                c+= "<tr><td>"+ (1+i)+"</td>"+

                    `<td>${userList[i].name}</td>
          
            <td>${user[i].email}</td>
            <td>${user[i].phone}</td>
            <td>${user[i].address}</td>
            <td>${user[i].description}</td>
            <td>${user[i].roles.name}</td>
                        
            <td className="icon-tution3782"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span><i
                className="fa fa-trash-o" aria-hidden="true"></i></span>
            </td>`
                    + "</tr>"
            }

            document.getElementById("detailUser").innerHTML= c;

        }
    });
}
