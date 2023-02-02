//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function toggleColumn(checkbox) {
  var table = document.getElementById("myTable");
  var headRow = table.children[0].children[0];

  var myRow = checkbox.closest("tr");
  if (checkbox.checked) {
    

    var newDelete= document.createElement("td");
    var newEdit = document.createElement("td");
    newEdit.innerHTML = '<button id="edit" type="button" onclick="editRow(this)">Edit</button>'
    newDelete.innerHTML = '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    myRow.lastChild.after(newDelete);
    myRow.lastChild.after(newEdit);

    if(headRow.lastChild.innerHTML != "EDIT")
    {
      var newDelColumn = document.createElement("th");
      newDelColumn.innerHTML = "DELETE"
      headRow.lastChild.after(newDelColumn);
      var newEditColumn = document.createElement("th");
      newEditColumn.innerHTML = "EDIT";
      headRow.lastChild.after(newEditColumn);
    }
    myRow.style.backgroundColor = "orange";
    document.getElementById("button").style.backgroundColor = "orange";
  } 
  else 
  {
    myRow.style.backgroundColor = "white";
    
    if(headRow.lastChild.innerHTML == "EDIT" && !isChecked())
    {
      headRow.removeChild(headRow.lastChild);
      headRow.removeChild(headRow.lastChild);
    }
    document.getElementById("button").style.backgroundColor = "grey";
    myRow.removeChild(myRow.lastChild);
    myRow.removeChild(myRow.lastChild);
    
  }
}

function hideSibling(image)
{
  var myRow = image.closest("tr");
  var nextRow = myRow.nextElementSibling;

  if(nextRow.style.display == "table-row")
  {
    nextRow.style.display = "none";
  }
  else
  {
    nextRow.style.display="table-row";
  }

}

function addNewRow()
{
    var table = document.getElementById("myTable");
    var tbodyRef = document.getElementsByTagName("tbody")[0];
    //var lastStudent = table.lastElementChild.lastElementChild?previousElementSibling?
    var lastStudent = table.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
    var lastestIndex = lastStudent.split(" ")[1];
    var tdNode  = document.createElement("tr");
    var tdNode2 = document.createElement("tr");
    tdNode2.className = "dropDownTextArea";
    tdNode2.style.display = "none";
    var trCheckboxCell = document.createElement("td");
    var trCheckboxCell2 = document.createElement("td");
    trCheckboxCell2.colSpan = "8";
    trCheckboxCell2.innerHTML = "Advisor:<br/><br/> Award Details<br/> Summer 1-2014(TA)<br/> Budget Number: <br/>    Tuition Number: <br/> Comments:<br/><br /><br />    Award Status:<br /><br /><br/>";
    trCheckboxCell.innerHTML = 
        '<input type="checkbox" onclick="toggleColumn(this)"/><br/> <br/><img src="down.png" width="25px" onclick="hideSibling(this)"/>';
    var trStudentCell = document.createElement("td");
    trStudentCell.innerHTML = "Student " + (parseInt(lastestIndex) + 1);
    var trTeacherCell = document.createElement("td");
    trTeacherCell.innerHTML = "Teacher " + (parseInt(lastestIndex)+1);
    var Approval = document.createElement("td");
    Approval.innerHTML = "Approved ";
    var Semester = document.createElement("td");
    Semester.innerHTML = "Fall ";
    var Type = document.createElement("td");
    Type.innerHTML = "TA ";
    var Budget = document.createElement("td");
    Budget.innerHTML = "34567 ";
    var percent = document.createElement("td");
    percent.innerHTML = "100% ";
    //apending inside tr
    tdNode.appendChild(trCheckboxCell);
    tdNode.appendChild(trStudentCell);
    tdNode.appendChild(trTeacherCell);
    tdNode.appendChild(Approval);
    tdNode.appendChild(Semester);
    tdNode.appendChild(Type);
    tdNode.appendChild(Budget);
    tdNode.appendChild(percent);

    //appending inside tbody
    tbodyRef.appendChild(tdNode);
    tdNode2.appendChild(trCheckboxCell2);
    tbodyRef.appendChild(tdNode2);

}

function isChecked() {

  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  var checked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;
    }
  }
  return checked;
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement; 
  
  document.getElementById("myTable").deleteRow(tr.rowIndex+1);
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  var table = document.getElementById("myTable");
  var headRow = table.children[0].children[0];
  if(isChecked()==false)
  {
    document.getElementById("button").style.backgroundColor="grey";
  }

  var val = tr.firstElementChild.nextElementSibling.innerHTML;
  if(headRow.lastChild.innerHTML == "EDIT" && isChecked()==false)
  {
      headRow.removeChild(headRow.lastChild);
      headRow.removeChild(headRow.lastChild);
  }
  alert("Row deleted "+val+" successfully!");
}

function editRow(rowObject)
{
  var input = prompt("Enter new value:");
  
}