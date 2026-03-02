let students = [
    {id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam"},
    {id: 2, name: "Nguyễn Văn B", score: 4.2, gender: "Nữ"},
    {id: 3, name: "Nguyễn Văn C", score: 9.0, gender: "Nam"},
    {id: 4, name: "Nguyễn Văn D", score: 5.5, gender: "Nữ"},
    {id: 5, name: "Nguyễn Văn E", score: 3.8, gender: "Nam"}
];
function goName(list) {
    return list
        .filter(s => s.gender === "Nữ")
        .sort((a, b) => a.score - b.score);}
let name2 = goName(students);
console.log("Sinh viên nữ sắp xếp tăng dần:", name2);
const newname = students
    .filter(s => s.score >= 5.0)
    .map(s => s.name);
console.log("Sinh viên đậu:", newname);
let name3 = students.filter(s => s.gender === "Nam");
let tong = name3.reduce((sum, s) => {
  return sum + s.score;
}, 0);
let averageScore = tong / name3.length;
console.log("Điểm trung bình Nam:", averageScore.toFixed(1));