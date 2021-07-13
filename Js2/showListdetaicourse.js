window.onload = function (){
    showAlDetailCourseTeaching()
}

function showAlDetailCourse() {
    let name = localStorage.getItem("name");
    console.log(name)
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/detail/find/teacher/WAIT/${name}`,
        success: function (data) {
            console.log(data);
            let c = ` <thead>
                    </thead>`;

            for (let i = 0; i < data.length; i++) {
                c += `<tr><td>` + (1 + i) + `</td>` +
                    `<td>${data[i].course.keyName}</td>
            <td>${data[i].course.subject.name}</td>
            <td>${data[i].course.groupName}</td>
            <td>${data[i].course.district.name}</td>
            <td>${data[i].course.periodOfTime}</td>
            <td>${data[i].userStudent.name}</td>
            <td>${data[i].startTime}</td>
            <td>${data[i].endTime}</td>
            <td>${data[i].course.description}</td>
            <td><button onclick="deletedetail()" style="color: #00BB59">xoá</button></td>
                        
            <td className="icon-tution3782"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span><i
                className="fa fa-trash-o" aria-hidden="true"></i></span>
            </td>`
                    + "</tr>"
            }

            document.getElementById("list-course").innerHTML = c;

        }
    });
    event.preventDefault();

}

function showAlDetailCourseTeaching() {
    let name = localStorage.getItem("name");
    console.log(name)
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/api/detail/find/teacher/TEACHING/${name}`,
        success: function (data) {
            console.log(data);
            let c = ` <thead>
                    </thead>`;

            for (let i = 0; i < data.length; i++) {
                c += `<tr><td>` + (1 + i) + `</td>` +
                    `<td>${data[i].course.keyName}</td>
            <td>${data[i].course.subject.name}</td>
            <td>${data[i].course.groupName}</td>
            <td>${data[i].course.district.name}</td>
            <td>${data[i].course.periodOfTime}</td>
            <td>${data[i].userStudent.name}</td>
            <td>${data[i].startTime}</td>
            <td>${data[i].endTime}</td>
            <td>${data[i].course.description}</td>
            <td><button onclick="deletedetail()" style="color: #00BB59">xoá</button></td>
                        
            <td className="icon-tution3782"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span><i
                className="fa fa-trash-o" aria-hidden="true"></i></span>
            </td>`
                    + "</tr>"
            }

            document.getElementById("list-course").innerHTML = c;


        }
    });
    event.preventDefault();
}

