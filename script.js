// pakelti įvestą skaičių kubu
let skaicius = +prompt("Įveskite skaičių kurį norite pakelti kubu");

let kubas = skaiciausKubas(skaicius);
console.log(kubas);

function skaiciausKubas(a) {
    return a * a * a;
}