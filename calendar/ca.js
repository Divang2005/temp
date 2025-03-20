function generateCalendar() {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    document.getElementById("month-year").innerText = `${month} ${year}`;
    
    const firstDay = new Date(year, date.getMonth(), 1).getDay();
    const lastDate = new Date(year, date.getMonth() + 1, 0).getDate();
    
    const daysContainer = document.getElementById("days");
    daysContainer.innerHTML = "";
    
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }
    
    for (let i = 1; i <= lastDate; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.innerText = i;
        if (i === date.getDate()) {
            dayDiv.classList.add("today");
        }
        daysContainer.appendChild(dayDiv);
    }
}

generateCalendar();