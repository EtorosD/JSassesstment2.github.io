console.log("Hello World")

const Student = ["John", "Jane", "Joe"];

function List () {
    console.log(`${Student[0]} is added to the student's list`);
    console.log(`${Student[1]} is added to the student's list`);
    console.log(`${Student[2]} is added to the student's list`);
}

List();

function studentNum (Student) {
    console.log(`There are total number of ${Student.length} students in the students' list.`);
}

studentNum (Student);

function studentsName (Student) {
    console.log(Student[0]);
    console.log(Student[1]);
    console.log(Student[2]);
}

studentsName (Student);

let enrollee = prompt ("Enter Student Name:")

function inputName (enrollee) {
    switch (enrollee){
        case (enrollee = "Joe"):
            console.log(enrollee, "is an Enrollee");
            break;
    }
    switch (enrollee){
        case (enrollee = "joe"):
            console.log(enrollee, "is an Enrollee");
            break;
    default:
        console.log(enrollee,  "is not on the list")
    }
}

inputName (enrollee);

function Remove (Student) {
    console.log(Student[2], "was removed from the  student's list")
    Student.pop();
    console.log(Student);
}

Remove (Student);

const studentGrades = [
    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8,
    },

    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.3,
        Q3: 76.5,
        Q4: 81.9,
    },

    {   studentId: 3, 
        Q1: 95.7, 
        Q2: 91.4, 
        Q3: 90.7, 
        Q4: 85.6 
    },

    {   studentId: 5, 
        Q1: 70.9, 
        Q2: 73.8, 
        Q3: 80.2, 
        Q4: 81.8 }
]

for (let i = 0; i < studentGrades.length; i++) {
    const student = studentGrades[i];
    const average = (student.Q1 + student.Q2 + student.Q3 + student.Q4) / 4;
    student.average = average.toFixed(1);
  }
  
  console.log(studentGrades);

  let people = [
    {
        name: 'John',
        age: 30,
        gender: 'male'
    },

    {
        name: 'Jane',
        age: 25,
        gender: 'female'
    },

    {
        name: 'Bob',
        age: 40,
        gender: 'male'
    },
  ]

let Mary = 
    {
        name: 'Mary',
        age: 35,
        gender: 'female'
    }

 
  people.push(Mary);
  console.log(people);

  people.shift();
  console.log(people);

  people.sort(function(a, b) 
  {
    return b.age - a.age;
  });

  const person = people.find(p => p.age >= 30);

  console.log(person);

  function weightConvert (kg) {
    const lbs = 0.453592
    return (kg/lbs).toFixed(0);
  }

  console.log(`Jelly's weight in lbs is`, weightConvert(59.8742));