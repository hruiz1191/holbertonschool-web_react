interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 20,
    location: "Ponce"
  };
  
  const student2: Student = {
    firstName: "María",
    lastName: "Santos",
    age: 22,
    location: "Mayagüez"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Crear la tabla
  const table: HTMLTableElement = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = "<tr><th>First Name</th><th>Location</th></tr>";
  table.appendChild(thead);
  
  const tbody = document.createElement("tbody");
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  
  