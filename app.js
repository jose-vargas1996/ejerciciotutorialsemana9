info = "==========CALCULADORA==========\n" +
    "{1} Suma\n" +
    "{2} Resta\n" +
    "{3} Multiplicar\n" +
    "{4} Dividir\n" +
    "{0} Salir\n"


let opcion = 0;

do {
    opcion = parseInt(prompt(info));
    console.log(typeof (opcion))
    switch (opcion) {
        case 1:
            alert("esta Sumando")
            let num1 = parseInt(prompt("Ingresar primer valor"))
            let num2 = parseInt(prompt("Ingresar segundo valor"))
            let suma = num1 + num2
            alert("la suma es" + suma)
            break;
           
        case 2:
            alert("esta Restando")
            let num3 = parseInt(prompt("Ingresar primer valor"))
            let num4 = parseInt(prompt("Ingresar segundo valor"))
            let resta = num3 - num4
            alert("la Resta es" + resta)
            break;
        case 3:
            alert("esta Multiplicando")
            let num5 = parseInt(prompt("Ingresar primer valor"))
            let num6 = parseInt(prompt("Ingresar segundo valor"))
            let Multiplicacion = num5 * num6
            alert("la Multiplicacion es" + Multiplicacion)
            break;
        case 4:
            alert("esta Dividiendo")
            let num7 = parseInt(prompt("Ingresar primer valor"))
            let num8 = parseInt(prompt("Ingresar segundo valor"))
            let Dividir = num7 / num8
            alert("la Multiplicacion es" + Dividir)
            break; 
        default:
            alert("No existe esa opcion 😭😭😭")
            break;            
    }

} while (opcion != 0);
