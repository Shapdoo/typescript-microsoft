enum ContractStatus {
  Permanet = 1,
  Temp,
  Apprentice
}

const employeeStatus: ContractStatus = ContractStatus.Apprentice
console.log(ContractStatus[employeeStatus])

//Inserción de tipos tipos de dato unknow y any

let anyType: any = 15
anyType = "Mateo" //OK
anyType = false // OK

//El tipo any nos permite ser mas flexibles con nuestras asignaciones a nuestras variables
//Pero no chequea estos errores en tiempo de compilación
// anyType[2]
// anyType()
// anyType.name

//Unknow type
let desconocido: unknown = "something";
//El tipo de dato unknow nos indica que desconocemos dicho
//tipo de dato y nos previene de errores en tiempo de ejecución
//Como los explicados anteriormente ya que nos hace imposible la modificacion de nuestra variable
// desconocido.toUpperCase()

//Asercion de tipos
//La asercion de tipos nos permite decirle a nuestro compilador
//"Oye confía en mi yo se lo que hago" de la siguiente manera

(desconocido as string).toUpperCase(); //sintaxis preferida
(<string>desconocido).toUpperCase() //sintaxis menos preferida

