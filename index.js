const birthday = document.getElementById("birthday");
const btn = document.querySelector(".btn");  
const year = document.getElementById("box1")
const month = document.getElementById("box2")
const date = document.getElementById("box3")

function getBirthday() {
    let birthdate = birthday.value;
    if (!birthdate) {
        alert("Please select your date of birth!");
        return;
    }
    let birth = new Date(birthdate)
    currentAge(birth);
}

function currentAge(birth){
    let today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;  
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    year.innerText = years;
    month.innerText = months
    date.innerText = days    
}

btn.addEventListener("click", getBirthday);

