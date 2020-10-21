class cliente {
   constructor(nombre, apellidop, apellidom, edad, numero,saldo){
      this.nombre=nombre;
      this.apellidop= apellidop;
      this.apellidom=apellidom;
      this.edad= edad;
      this.numero= numero;
      this.saldo=saldo;


   }

}
function mostrardatos(){
   function clientes(nombre, apellidop, apellidom, edad, numero,saldo){
       this.nombre=nombre;
      this.apellidop= apellidop;
      this.apellidom=apellidom;
      this.edad= edad;
      this.numero= numero;
      this.saldo=saldo;
   }
   const nombre=document.getElementById('nombre').value;
  const apellidop=document.getElementById('apep').value;
  const apellidom= document.getElementById('apem').value;
  const edad= document.getElementById('edad').value;
  const numero= document.getElementById('tele').value;
  const saldo= document.getElementById('saldo').value;
   nuevocliente= new clientes(nombre, apellidop, apellidom, edad, numero, saldo);
   mostrar();


}
var arreglo = [];

            function mostrar(){
                arreglo.push(nuevocliente);
                document.getElementById("tabla").innerHTML +=  '<tbody><td>'+nuevocliente.nombre+" "+nuevocliente.apellidop+'</td><td>'+nuevocliente.edad+'</td><td>'+nuevocliente.numero+'</td><td>'+nuevocliente.saldo+'</td></tbody>';
               i=1;
                while(i<6){
                  saldos=[];
                  saldos[i]=document.getElementById('saldo').value*1.03*[i];

                alert("tu saldo en "+ i + " año será " + saldos[i]);
                i++;
}
            };




class enviar{
   añadir(Cliente){
      

   }
   mostrardatos(){}
}
var clientes=[];

//eventos
document.getElementById('datos').addEventListener('submit', function(e){
  const nombre=document.getElementById('nombre').value;
  const apellidop=document.getElementById('apep').value;
  const apellidom= document.getElementById('apem').value;
  const edad= document.getElementById('edad').value;
  const numero= document.getElementById('tele').value;
  const saldo= document.getElementById('saldo').value;
  console.log(nombre, apellidop, apellidom);

  const Enviar= new enviar();
  const Cliente=new cliente(nombre, apellidop, apellidom, edad, numero, saldo);
  Enviar.añadir(Cliente);
  e.preventDefault();
})