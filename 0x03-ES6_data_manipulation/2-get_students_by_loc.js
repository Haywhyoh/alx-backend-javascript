export default function (getListStudents, city) {
  return getListStudents.filter((x) => (x.location === city));
}
