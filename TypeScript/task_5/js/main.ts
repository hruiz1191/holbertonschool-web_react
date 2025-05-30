// task_5/js/main.ts

// Interfaces con brand para nominal typing
interface MajorCredits {
    credits: number;
    __brand: "MajorCredits";
  }
  
  interface MinorCredits {
    credits: number;
    __brand: "MinorCredits";
  }
  
  // Función para sumar créditos mayores
  function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
  ): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: "MajorCredits",
    };
  }
  
  // Función para sumar créditos menores
  function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
  ): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: "MinorCredits",
    };
  }
  
  // (Opcional) Ejemplo de prueba
  const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
  const major2: MajorCredits = { credits: 4, __brand: "MajorCredits" };
  console.log("Major sum:", sumMajorCredits(major1, major2));
  
  const minor1: MinorCredits = { credits: 1, __brand: "MinorCredits" };
  const minor2: MinorCredits = { credits: 2, __brand: "MinorCredits" };
  console.log("Minor sum:", sumMinorCredits(minor1, minor2));
  