window.onload = function () {
    editUser();
}



function editUser() {
    let id = localStorage.getItem("idOfUser");
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/user/admin/findOne/" + id,
        success: function (user) {
            let c = "";

            c += `<div className="stu-personal-info9120" style="display: block">
                     <h4>Type Account:</h4>


                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320">Type </label>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                
                            <!--                    <input type="radio" class="role_user" name="roles" value="3"-->
                            <!--                           onclick="studentView()"><span>Student</span>-->
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            <input type="radio" className="role_user" name="roles" value="${user.roles}"
                                   onClick="teacherView()"><span>Teacher</span>
                        </div>

                    </div>
                    <div className="stu-fees-info9120">
                        <h4>Personal Info:</h4>
                
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_name">Name*</label>
                            <input type="text" className="form-control form-control829" name="name" id="user_name"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status1" className="sr-only">(success)</span>
                        </div>
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_username">UserName*</label>
                            <input type="text" className="form-control form-control829" name="username" id="user_username"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status2" className="sr-only">(success)</span>
                        </div>
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_email">Email*</label>
                            <input type="text" className="form-control form-control829" name="email" id="user_email"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status3" className="sr-only">(success)</span>
                        </div>
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_password">Password*</label>
                            <input type="text" className="form-control form-control829" name="password" id="user_password"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status4" className="sr-only">(success)</span>
                        </div>
                
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_phone">Phone*</label>
                            <input type="text" className="form-control form-control829" name="phone" id="user_phone"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status5" className="sr-only">(success)</span>
                        </div>
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_addr">Address</label>
                            <input type="text" className="form-control form-control829" name="address" id="user_addr"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status6" className="sr-only">(success)</span>
                        </div>
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_des">Description</label>
                            <input type="text" className="form-control form-control829" name="description" id="user_des"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status7" className="sr-only">(success)</span>
                        </div>
                
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320">Image</label>
                            <input type="file" className="form-control form-control829" name="avatar" id="user_avatar"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status9" className="sr-only">(success)</span>
                        </div>
                
                    </div>
                    <div className="optional-info9120" id="foldOptional">
                        <h4>Optional Info:</h4>
                
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320" htmlFor="user_cer">Certificate</label>
                            <input type="text" className="form-control form-control829" name="certificate" id="user_cer"
                                   aria-describedby="inputSuccess2Status"> <span
                                className="glyphicon glyphicon-ok form-control-feedback form-control-feedback28"
                                aria-hidden="true"></span> <span id="inputSuccess2Status" className="sr-only">(success)</span></div>
                        <div className="form-group has-success has-success2892 has-feedback has-success212">
                            <label className="col-sm-2 control-label control-label9320">Subject Type*</label>
                            <div className="form-control form-control829" id="subjectList">
                                <select className="" id="user_subject" name="subjects" multiple>
                                    <option value="">Admission Fee</option>
                                    <option>Monthly Fee</option>
                
                                </select>
                            </div>
                        </div>
                
                    </div>
                    <br>
                        <div className="fees-button0230">
                            <button type="button" className="fess-submit9203" onClick="addUser()">Edit</button>
                        </div>`


            document.getElementById("detailUser").innerHTML = c;
        }

    });

}