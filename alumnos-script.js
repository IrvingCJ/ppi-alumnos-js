const MAX_CAL = 2;

class Alumno {
  constructor() {
    this.nombre = "";
    this.edad = 0;
    this.carrera = "";
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
  constructor() {
      this.id = "";
      this.nombre = "";
  }
}
