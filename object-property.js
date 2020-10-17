const students = [
    {id: 21, Name: "Ormar Sunny"},
    {id: 30, Name: "Mannaa"},
    {id: 26, Name: "Deepjol"},
];
// const studentsName = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const sName = element.Name;
//     studentsName.push(sName);
//     console.log(studentsName);
// }

const names = students.map(s => s.Name);
const bigger = students.filter(s => s.id > 20);
console.log(bigger);