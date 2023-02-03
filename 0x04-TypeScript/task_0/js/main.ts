interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Adedayo',
  lastName: 'Ayomide',
  age: 24,
  location: 'Nigeria'
}

const student2: Student = {
  firstName: 'Sam',
  lastName: 'Ade',
  age: 24,
  location: 'Lagos'
}

const studentsList:  Student[]= [student1, student2];