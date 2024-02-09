$(document).ready(function () {
    renderTable();
});
let employees = 
   [
     {
       FirstName: "Arbaz",
       LastName: "Ali",
       EmailID: "arbazali@gmail.com",
       MobileNo: "6304059867",
       DOB:"2001-10-02",
       Gender: "Male",
       Department:"Software",
       Designation:"Software Developer",
       Role:"Admin",       
       Active:"Yes",
       Address:"Hyderabad"
     },
     {
       FirstName: "Shahbaz",
       LastName: "Alam",
       EmailID: "sahbaz78@gmail.com",
       MobileNo: "7543832595",
       DOB:"2003-10-01",
       Gender: "Male",
       Department:"Software",
       Designation:"React Developer",
       Role:"Team Member",       
       Active:"No",
       Address:"Chennai"
     },
   ];           
const employeeForm = document.getElementById("employeeForm");
const employeeTable = document.getElementById("employeeTbl");

function formatDate() {
const dobInput = document.getElementById('dob');
const dobValue = dobInput.value;   
const [year, month, day] = dobValue.split('-');       
const formattedDate = `${year}-${month}-${day}`;    
dobInput.value = formattedDate;
}
function renderTable() {        
   const tbody = employeeTable.querySelector("tbody");
    tbody.innerHTML = "";         
  
   employees.forEach((employee, index) => {
   const row = document.createElement("tr");
   row.innerHTML = `
 <td>${employee.FirstName}</td>
 <td>${employee.LastName}</td>
 <td>${employee.EmailID}</td>
 <td>${employee.MobileNo}</td>
 <td>${employee.DOB}</td>
 <td>${employee.Gender}</td>
 <td>${employee.Department}</td>
 <td>${employee.Designation}</td>
 <td>${employee.Role}</td>
 <td>${employee.Active}</td>
 <td>${employee.Address}</td>
 <td>
   <input id="EditBtn" type="button" class="EditTblBtn" onclick="editEmployee(${index})" value="Edit"/>
   <input id="DeleteBtn" type="button" class="DeleteTblBtn"  onclick="deleteEmployee(${index})" value="Delete"/>
 </td>
`;
tbody.appendChild(row);
});
}

function saveEmployee() {
var vSelectedIndex= document.getElementById("txtSelectedIndex").value;
if(vSelectedIndex >= 0)
{
updateEmployee(vSelectedIndex);
return;
} 
const firstName = document.getElementById("txtfirstName").value;
const lastName = document.getElementById("lastName").value;
const emailID = document.getElementById("emailID").value;
const mobileNo = document.getElementById("mobileNo").value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailPattern.test(emailID)) {
 alert("Invalid email address. Please enter a valid email.");
      return;
  }          
 const mobileNoPattern = /^\d{10}$/; 
 if (!mobileNoPattern.test(mobileNo)) {
 alert("Invalid mobile number. Please enter a 10-digit number.");
      return;
 }
const dob = document.getElementById("dob").value;
const gender = document.getElementById("ddlGender").value;
const department = document.getElementById("ddlDepartment").value;
const designation = document.getElementById("ddlDesignation").value;
const role = document.getElementById("ddlRole").value;   
const address = document.getElementById("address").value;
var active="No";
var bChkActive = document.getElementById("chkActive");
if(bChkActive.checked==true) 
{
active="Yes";   
}
else{
active="No";     
}      
if(firstName.trim()=="" || lastName.trim()=="" || emailID.trim()=="" || dob.trim()=="" ||
gender.trim()=="" || department.trim()=="" || designation.trim()=="" || role.trim()=="")
{
alert("Please fill in all required fields.");
return;
}else{
alert('Form submitted successfully!');       
}

const employee = {
FirstName: firstName,
LastName: lastName,        
EmailID: emailID,
MobileNo: mobileNo,
DOB: dob,
Gender: gender,
Department: department,
Designation: designation,
Role: role,
Active: active,
Address: address,
};

employees.push(employee);
renderTable();
clearForm();
}
function editEmployee(index) {
document.getElementById("txtSelectedIndex").value=index;
const employee = employees[index];
document.getElementById("txtfirstName").value = employee.FirstName;
document.getElementById("lastName").value = employee.LastName;
document.getElementById("emailID").value = employee.EmailID;
document.getElementById("mobileNo").value = employee.MobileNo;
const dobValue = employee.DOB;
const [year, month, day] = dobValue.split('-');
const formattedDate = `${year}-${month}-${day}`;
document.getElementById("dob").value = formattedDate;
document.getElementById("ddlGender").value = employee.Gender;
document.getElementById("ddlDepartment").value = employee.Department;
document.getElementById("ddlDesignation").value = employee.Designation;
document.getElementById("ddlRole").value = employee.Role;    
document.getElementById("address").value = employee.Address;        
var checkbox = document.getElementById("chkActive");
if(employee.Active=="Yes") 
{
checkbox.checked = true;   
}
else{
checkbox.checked = false;   
}
}

function updateEmployee(index) {
const firstName = document.getElementById("txtfirstName").value;
const lastName = document.getElementById("lastName").value;
const emailID = document.getElementById("emailID").value;
const mobileNo = document.getElementById("mobileNo").value;
const dob = document.getElementById("dob").value;
const gender = document.getElementById("ddlGender").value;
const department = document.getElementById("ddlDepartment").value;
const designation = document.getElementById("ddlDesignation").value;
const role = document.getElementById("ddlRole").value;   
const address = document.getElementById("address").value;
var active="No";
var bChkActive = document.getElementById("chkActive");
if(bChkActive.checked==true) 
{
active="Yes";   
}
else{
active="No";     
}
alert('Form updated successfully!');
employees[index] = {
FirstName: firstName,
LastName: lastName,
EmailID: emailID,
MobileNo: mobileNo,
DOB: dob,
Gender: gender,
Department: department,
Designation: designation,
Role: role,
Active: active,
Address: address,
};       

renderTable();
clearForm();
}
function deleteEmployee(index) {
alert('Form deleted successfully!');
employees.splice(index, 1);
renderTable();
}   
function clearForm() {
document.getElementById("txtSelectedIndex").value="-1";
document.getElementById("txtfirstName").value = "";
document.getElementById("lastName").value = "";      
document.getElementById("emailID").value = "";
document.getElementById("mobileNo").value = "";
document.getElementById("dob").value = "";
document.getElementById("ddlGender").value = "Select";
document.getElementById("ddlDepartment").value = "Select";
document.getElementById("ddlDesignation").value = "Select";
document.getElementById("ddlRole").value = "Select";
document.getElementById("chkActive").checked = false;                 
document.getElementById("address").value = "";       

} 