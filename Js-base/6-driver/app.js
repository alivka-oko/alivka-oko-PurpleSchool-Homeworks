let hasLicense = true;
let age = 21;
let isDrunk = false;

const canDrive= hasLicense && (age >= 18) && !isDrunk
console.log(`Водитель ${canDrive ? 'может' : 'не может'} управлять транспортным средством`);