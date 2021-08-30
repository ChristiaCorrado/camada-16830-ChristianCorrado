class Profesor {
    constructor(nombre, apellido) {
      this.nombre = nombre || undefined;
      this.apellido = apellido || undefined;
    }
  }
  
  class Alumnos {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre || undefined;
      this.apellido = apellido || undefined;
      this.edad = edad || edad || undefined;
    }
  }
  
  class Curso{
    constructor(ano,divicion,espacio){
      this.ano = ano || undefined;
      this.divicion = divicion || undefined;
      this.espacio = espacio || undefined;
    }
  }

  class Aulas{
      constructor(curso,espacio){
          this.curso = curso || undefined;
          this.espacio = espacio || undefined;
      }
  }