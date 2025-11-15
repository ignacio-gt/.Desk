function cambiarIconoPorCurso() {
    const cursos = document.querySelectorAll("a.course");

    cursos.forEach(curso => {
        const icono = curso.querySelector(".course_icon");

        if (!icono) return;

        if (curso.classList.contains("programacion")) {
            icono.src = "../assests/img/course_icon_programacion.png";
            icono.style.backgroundColor = "#2d3c50";
        }
        if (curso.classList.contains("matematicas")) {
            icono.src = "../assests/img/course_icon_matematicas.png";
            icono.style.backgroundColor = "#3c5a85";
        }
        if (curso.classList.contains("negocio")) {
            icono.src = "../assests/img/course_icon_negocio.png";
            icono.style.backgroundColor = "#3b8185";
        }
        if (curso.classList.contains("datos")) {
            icono.src = "../assests/img/course_icon_datos.png";
            icono.style.backgroundColor = "#e9b34c";
        }
        
    });
}

cambiarIconoPorCurso();