var ToDoList = [];
function GetTable(ev) {
    ev.preventDefault();
    var ToDo_Title = document.getElementById('Title');
    var ToDo_Description = document.getElementById('Description');
    var ToDo_date = document.getElementById('Date');
    var today = new Date();
    var ToDO_Form_Date = new Date(ToDo_date.value);
    var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var Detail = {
        title: ToDo_Title.value,
        Description: ToDo_Description.value,
        date: {
            FormDate: ToDO_Form_Date.toLocaleDateString(),
            TodatTime: today.toTimeString(),
            FormDateDay: Days[ToDO_Form_Date.getDay()]
        }
    };
    document.forms[0].reset();
    ToDoList.push(Detail);
    // var div =document.getElementById('ToDo_Card')! as HTMLElement;
    // var h2 =document.getElementById('Title')! as HTMLElement;
    // var p =document.getElementById('Description')! as HTMLElement;
    var newDiv = document.createElement('div');
    newDiv.className += 'card';
    var heading2 = document.createElement('h2');
    heading2.textContent = 'Title';
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Jigar Modi';
    var Edit_btn = document.createElement('button');
    Edit_btn.className += 'Edit_btn';
    Edit_btn.id = 'Edit_btn';
    Edit_btn.textContent = 'Edit';
    var i = document.createElement('i');
    i.className += 'fa fa-edit';
    i.style.paddingLeft = "10px";
    Edit_btn.appendChild(i);
    newDiv.appendChild(heading2);
    newDiv.appendChild(paragraph);
    newDiv.appendChild(Edit_btn);
    document.getElementById('ToDo_Card').appendChild(newDiv);
    console.log(ToDoList);
    var temp = "";
    // for(var j=0;j < ToDoList.length; j++){
    //     temp += h2.innerHTML
    // }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', GetTable);
});
