var selectedRow = null
const  submit1 = document.getElementById("submit1")
submit1.addEventListener("click", function onFormSubmit() {

    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
})
    
     




const titre = document.getElementById("titre")
const auteur = document.getElementById('auteur')
const prix = document.getElementById('prix')
function readFormData() {
    var formData = {};
    formData["titre"] = document.getElementById("titre").value;
    formData["auteur"] = document.getElementById("auteur").value;
    formData["prix"] = document.getElementById("prix").value;
    formData["langue"] = document.getElementById("langue").value;
    formData["date"] = document.getElementById("date").value;
    
   

    formData['roman']= document.querySelector('input[name="fav"]:checked').value


if ((titre.value>='A' && titre.value<='Z') ||  (titre.value>='a' && titre.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Title Field Correctly");
        document.getElementById("titre1").focus();

    }

    if ((auteur.value>='A' && auteur.value<='Z') ||  (auteur.value>='a' && auteur.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Auteur Field Correctly");
        document.getElementById("titre1").focus();

    }


    if (prix.value>=48 || prix.value<=57)
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Prix Field Correctly");
        document.getElementById("titre1").focus();

    }

   

    
    return formData;
  
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.auteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.langue;
    cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.roman;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("langue").value = "";
    document.getElementById("roman").value = "";
    document.getElementById("date").value = "";
 
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[3].innerHTML;
    document.getElementById("roman").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titre;
    selectedRow.cells[1].innerHTML = formData.auteur;
    selectedRow.cells[2].innerHTML = formData.prix;
    selectedRow.cells[3].innerHTML = formData.langue;
    selectedRow.cells[4].innerHTML = formData.roman;
    selectedRow.cells[5].innerHTML = formData.date;
 
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("titre").value == "") {
        isValid = false;
        document.getElementById("first").classList.remove("hide");
    } else {
        isValid = true;
        if(!document.getElementById("first").classList.contains("hide"))
            document.getElementById("first").classList.add("hide");
    }
    return isValid;
} 

submit1.addEventListener("click", onFormSubmit())