const student = {
  name: "Matteo",
  surname: "Chiocchetti",
  age: 24,
  hasWebcam: true,
  location: {
    region: "fresno",
    country: "Italy",
    coordinates: {
      lat: 39.484,
      lon: 12.457,
    },
  },
  "e-mail": "matteo@gmail.com",
};
console.log(student);
console.log(student.name);
console.log(student.surname);

console.log(student.location.coordinates.lon);

console.log(student["e-mail"]);

const propertyToLookUpFor = "hasWebcam";
console.log(stuent[propertyToLookUpFor]);
