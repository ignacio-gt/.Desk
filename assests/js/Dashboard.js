    const daysContainer = document.getElementById("days");
    const monthYear = document.getElementById("month-year");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let date = new Date();

    function renderCalendar() {
      const year = date.getFullYear();
      const month = date.getMonth();

      // Nombre del mes
      const monthNames = [
        "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JULIO",
        "JUNIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
      ];
      monthYear.textContent = `${monthNames[month]} ${year}`;

      // Limpiar días anteriores
      daysContainer.innerHTML = "";

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      // Espacios en blanco antes del primer día
      for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
      }

      // Días del mes
      for (let i = 1; i <= lastDate; i++) {
        const today = new Date();
        const isToday =
          i === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();
        daysContainer.innerHTML += `<div class="day ${isToday ? "today" : ""}">${i}</div>`;
      }
    }

    prevBtn.onclick = () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    };
    nextBtn.onclick = () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    };

    renderCalendar();