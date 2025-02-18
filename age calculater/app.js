function calculateAge() {
    let p1 = document.getElementById("dob").value;
    if (p1==="") {
        document.getElementById("result").innerText = "Please select your birth date‼";
        return;
    }
    let p1Date = new Date(p1);
    let todayDate = new Date();
    let ageYears = todayDate.getFullYear() - p1Date.getFullYear();
    let ageMonths = todayDate.getMonth() - p1Date.getMonth();
    let ageDays = todayDate.getDate() - p1Date.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    document.getElementById("result").innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old🎉`;
    document.getElementById("dob").value = "";
    
 
}