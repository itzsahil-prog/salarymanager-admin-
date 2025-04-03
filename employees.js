function saveDetails() {
    let name = document.getElementById("empName").value;
    let empID = document.getElementById("empID").value;
    let position = document.getElementById("position").value;
    let doj = document.getElementById("doj").value;

    if (name === "" || empID === "" || position === "" || doj === "") {
        alert("Please fill all details!");
        return;
    }

    let table = document.getElementById("employeeTable");

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerText = name;
    cell2.innerText = empID;
    cell3.innerText = position;
    cell4.innerText = doj;

    document.getElementById("empName").value = "";
    document.getElementById("empID").value = "";
    document.getElementById("position").value = "";
    document.getElementById("doj").value = "";

    alert("Employee details added successfully!");
}