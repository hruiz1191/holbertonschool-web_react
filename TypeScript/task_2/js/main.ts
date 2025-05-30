// Interfaces para Director y Teacher
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Clases que implementan las interfaces
  export class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Función que devuelve instancia de Teacher o Director
  export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Type predicate para saber si es Director
  export function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
  }
  
  // Ejecuta la función correspondiente
  export function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
  }
  
  // Literal type Subjects
  export type Subjects = "Math" | "History";
  
  // Función que enseña la clase
  export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    }
    return "Teaching History";
  }
  
  // Pruebas
  console.log(createEmployee(200));           // Teacher instance
  console.log(createEmployee(1000));          // Director instance
  console.log(createEmployee("$500"));        // Director instance
  
  console.log(executeWork(createEmployee(200)));   // Getting to work
  console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
  
  console.log(teachClass("Math"));            // Teaching Math
  console.log(teachClass("History"));         // Teaching History
  