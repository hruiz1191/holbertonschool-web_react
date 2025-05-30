// 1️⃣ Interface: Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // permite propiedades adicionales
}

// Ejemplo de objeto Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher3);

// 2️⃣ Interface: Directors (extends Teacher)
interface Directors extends Teacher {
  numberOfReports: number;
}

// Ejemplo de objeto Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3️⃣ Interface: printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function: printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Ejemplo de uso de printTeacher
console.log(printTeacher("John", "Doe")); // Salida: J. Doe

