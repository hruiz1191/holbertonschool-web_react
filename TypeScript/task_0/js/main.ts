// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "Héctor",
    lastName: "Ruiz",
    age: 30,
    location: "Ponce"
  };
  
  const student2: Student = {
    firstName: "María",
    lastName: "Santos",
    age: 25,
    location: "San Juan"
  };
  
  // Store them in an array
  const studentsList: Student[] = [student1, student2];
  
  // Create a table using Vanilla JS
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  