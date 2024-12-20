// localStorage.clear();
function displayInfo(){
    let acctype = document.getElementById("acctype");
    let val = acctype.value;
    let salary = document.getElementById("m-salary").value;
    localStorage.setItem("Account Type", val);
    localStorage.setItem("Monthly Salary", salary);
}
function displayInfo1(){
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    localStorage.setItem("First Name", fname);
    localStorage.setItem("Last Name", lname);
}
function displayInfo2(){
    let phNum = document.getElementById("phone").value;
    let cnicNum = document.getElementById("cnic").value;
    localStorage.setItem("Phone:", phNum);
    localStorage.setItem("CNIC:", cnicNum);
}
function displayInfo3(){
    let add1 = document.getElementById("add-1").value;
    let add2 = document.getElementById("add-2").value;
    localStorage.setItem("Address:", add1);
    localStorage.setItem("Address-2:", add2);
}
function displayInfo4(){
    let c = document.getElementById("city").value;
    let r = document.getElementById("region").value;
    localStorage.setItem("City", c);
    localStorage.setItem("Region", r);
}
function displayInfo5(){
    let code = document.getElementById("zipcode").value;
    let cntry = document.getElementById("country");
    let cntryVal = cntry.value;
    localStorage.setItem("Zip Code", code);
    localStorage.setItem("Country", cntryVal);
}