const MAX_CAL = 2;

class Alumno {
  constructor() {
    this.nombre = "";
    this.edad = 0;
    this.carrera = "";
    this.materias = {};
  }

  agregarMateria(materia) {
    this.materias[materia.id] = [];
  }

  agregarCalificacion(idMateria, calificacion) {
    if (!this.materias[idMateria]) return;
    if (this.materias[idMateria].length < MAX_CAL) {
      this.materias[idMateria].push(calificacion);
    }
    else {
      console.log("Número máximo de calificaciones por materia alcanzado");
    }
  }
}

class Materia {
  constructor() {
      this.id = "";
      this.nombre = "";
  }
}
