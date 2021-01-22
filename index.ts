const ToDoList = [];

function GetTable(ev:MouseEvent):void{
    ev.preventDefault();
    var ToDo_Title = document.getElementById('Title')! as HTMLInputElement;
    var ToDo_Description = document.getElementById('Description')! as HTMLInputElement;
    var ToDo_date = document.getElementById('Date')! as HTMLInputElement;
    
    var today =new Date();
    var ToDO_Form_Date = new Date(ToDo_date.value);
    var Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    type date = {
        FormDate : String;
        TodatTime :String;
        FormDateDay:String;
    }
    type ToDo_Details = {
        title:String;
        Description:String;
        date: date
    }

    const Detail:ToDo_Details = {
        title:ToDo_Title.value,
        Description:ToDo_Description.value,
        date : {
            FormDate: ToDO_Form_Date.toLocaleDateString(),
            TodatTime : today.toTimeString(),
            FormDateDay: Days[ToDO_Form_Date.getDay()],
        }
    }
    document.forms[0].reset();
    ToDoList.push(Detail);

    var newDiv = document.createElement('div');
    newDiv.className +='card';
    
    var heading2 =document.createElement('h2');
    heading2.textContent = 'Title';
    var paragraph =document.createElement('p');
    paragraph.textContent = 'Jigar Modi';
    var Edit_btn = document.createElement('button');
    Edit_btn.className += 'Edit_btn';
    Edit_btn.id = 'Edit_btn';
    Edit_btn.textContent = 'Edit';
    var i =document.createElement('i');
    i.className += 'fa fa-edit';
    i.style.paddingLeft = "10px";  

    Edit_btn.appendChild(i);
    newDiv.appendChild(heading2);
    newDiv.appendChild(paragraph);
    newDiv.appendChild(Edit_btn);
    document.getElementById('ToDo_Card').appendChild(newDiv);
    
    console.log(ToDoList);
    var temp = "";
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('btn').addEventListener('click',GetTable);   
});