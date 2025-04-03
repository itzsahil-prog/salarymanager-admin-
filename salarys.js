function calculateSalary() {
    let empName = document.getElementById("empName").value;
    let empID = document.getElementById("empID").value;
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);

    if (empName === "" || empID === "" || isNaN(basicSalary) || basicSalary <= 0) {
        alert("Please enter valid details!");
        return;
    }

    let allowance = basicSalary * 0.20; // 20% Allowance
    let taxDeduction = basicSalary * 0.10; // 10% Tax
    let netSalary = basicSalary + allowance - taxDeduction;

    let table = document.getElementById("salaryTable");
    let row = table.insertRow();
    row.innerHTML = `
        <td>${empID}</td>
        <td>${empName}</td>
        <td>$${basicSalary.toFixed(2)}</td>
        <td>$${allowance.toFixed(2)}</td>
        <td>$${taxDeduction.toFixed(2)}</td>
        <td>$${netSalary.toFixed(2)}</td>
    `;

    // Clear input fields
    document.getElementById("empName").value = "";
    document.getElementById("empID").value = "";
    document.getElementById("basicSalary").value = "";
}