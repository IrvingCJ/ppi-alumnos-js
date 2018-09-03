const MAX_CAL = 2;

class Alumno {
  constructor(nombre, edad, correo, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.carrera = carrera;
    this.materias = {};
  }

  agregarMateria(materia) {
    if (!materia.id){
      console.log("Error al acceder al id de la materia");
      return;
    }

    this.materias[materia.id] = [];
  }

  agregarCalificacion(idMateria, calificacion) {
    if (!this.materias[idMateria]) {
      console.log("El alumno no tiene registrada dicha materia");
      return;
    }

    if (typeof(calificacion) !== "number"){
      console.log("Calificacion inválida");
      return;
    }

    if (this.materias[idMateria].length >= MAX_CAL){
      console.log("Número máximo de calificaciones por materia alcanzado");
      return;
    }

    if (!this.materias[idMateria].length ||
        calificacion < this.materias[idMateria][0]) {
      this.materias[idMateria].push(calificacion);
    }
    else {
      this.materias[idMateria].unshift(calificacion);
    }
  }

  promedio() {
    var sumaCalif = 0, numCalif = 0;
    for (var idMateria in this.materias) {
      if (!this.materias[idMateria].length) continue;
      numCalif++;
      sumaCalif += this.materias[idMateria][0];
    }
    return sumaCalif/numCalif;
  }
}

class Materia {
  constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
  }
}

function agregaAlumno() {
    var datosAlumno = [];
    const inputs = document.querySelectorAll('#form_alumno .in');
    inputs.forEach(input => datosAlumno.push(input.value));
    alumnos.push(new Alumno(...datosAlumno));
    console.log('Alumno registrado');
}

function agregaMateria() {
    var datosMateria = [];
    const inputs = document.querySelectorAll('#form_materia .in');
    inputs.forEach(input => datosMateria.push(input.value));
    materias.push(new Materia(...datosMateria));
    console.log('Materia registrada');
}

function agregarCalificacion() {
    var datosCalificacion = [];
    const inputs = document.querySelectorAll('#form_calificacion .in');
    inputs.forEach(input => datosCalificacion.push(input.value));

    const alumnoIndex = alumnos.findIndex(alumno => alumno.nombre === datosCalificacion[0]);
    if (alumnoIndex === -1) {
      console.log('El alumno no existe');
      return;
    }

    const materiaIndex = materias.findIndex(materia => materia.id === datosCalificacion[1]);
    if (materiaIndex === -1) {
      console.log('La materia no existe');
      return;
    }

    alumnos[alumnoIndex].agregarCalificacion(datosCalificacion[1], parseFloat(datosCalificacion[2]));
}

var alumnos = [];
var materias = [];

const [botonAl, botonMat, botonCal] = document.querySelectorAll('.button');
botonAl.addEventListener('click', agregaAlumno);
botonMat.addEventListener('click', agregaMateria);
botonCal.addEventListener('click', agregarCalificacion);
