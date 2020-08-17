let a,b,c,delta;

a=Number(1); 
b=Number(4); 
c=Number(4); 
 

function receiveValue(){
  if(a===0) {
     console.log('Sendo o coeficiente A = 0, a lei de formação é afligida, e a cálculo não pode prosseguir. \n tente Novamente')
     
  } else if(!!isNaN(a)|| !!isNaN(b) || !!isNaN(c)){
    console.log('Valores não inseridos e/ou inseridos incorretamente')

  } else isExact(delta);
   
} 

receiveValue() 



function isExact(delta){
  delta=(b*b)-4*a*c;   
    if(delta<0 || Math.sqrt(delta).toString().indexOf('.')!=-1 ){
      console.log('Delta inválido no conjunto dos números reais.'); 
      console.log(delta)
    } else calc(delta)
}


function calc(delta){
  let formulaX1=(-b+Math.sqrt(delta))/(2*a); 
  let formulaX2=(-b-Math.sqrt(delta))/(2*a); 

  let universeSetNumbers=[formulaX1,formulaX2];
  return res(universeSetNumbers); 
  
}

function res(universeSetNumbers){
    if(universeSetNumbers[0]===universeSetNumbers[1]){
        console.log(`O Conjunto Solução é somente composto por ${universeSetNumbers[0]} \n S={${universeSetNumbers[0]}}`);
    } 
    else{
        console.log(`O Conjunto Solução é composto por ${universeSetNumbers[0]} e por ${universeSetNumbers[1]}  \n S={${universeSetNumbers[0]}, ${universeSetNumbers[1]}}` )
    }
}






// ---------------------------------
//  let delta=100;  

// const hasMultiple = (delta) => {
//   for (let i = 0; i <= Math.sqrt(delta); ++i) {
//     if (i * i === delta) {
//       return !!i;
//     }
//   }
//   return false;
// }


// const printHasMultiple = (delta) => {
//  console.log(hasMultiple(delta)?'Exata':'Não Exata')
// }


//  printHasMultiple(delta);

// let has = false;
// for (let i = 0; i <= Math.sqrt(delta); ++i) {
//   if (i * i === delta) {
//     has =  true;
//     break;
//   }
// }
// if (has)console.log('Exata');
//   else console.log('Não exata');
  
