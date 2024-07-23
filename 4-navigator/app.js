// Задача: рассчитать дистанцию от текущего местоположения пользователя до желаемой точки назначения.
let positionLat = 2;//Текущее местоположение пользователя (широта)
let positionLong = 3;//Текущее местоположение пользователя (долгота)

let addressLat = 8; //Местоположение точки назначения (широта)
let addressLong = 11; //Местоположение точки назначения (долгота)

// Расчет "катетов" треугольника
let latitude = addressLat - positionLat; // По оси X
let longitude = addressLong - positionLong; // По оси Y

//Считаем гипотенузу / расстояние по диагонали
let distance = (latitude ** 2 + longitude ** 2) ** 0.5;

console.log(distance);