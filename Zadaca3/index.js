function clr(){
         document.getElementById('value1').value = '';
         document.getElementById('value2').value = '';
}

document.getElementById('unit_val1').addEventListener('change', changeUnit, false);

function changeUnit(){
         let val1 = document.getElementById('unit_val1').value;
         let el2 = document.getElementById('unit_val2');
         
         if(val1 == 'ms'){
                  el2.value='kmh';
         }else if(val1 = 'kmh'){
                  el2.value='ms';
         }
}

document.getElementById('value1').addEventListener('input', autoCalc, false);

function autoCalc(){
         
         if(document.getElementById('autocalc').checked){
                 calc();
         }
}

function calc(){

         let val1 = document.getElementById('unit_val1').value;
         let el1 = document.getElementById('value1');
         let el2 = document.getElementById('value2');
         if(val1 == 'ms'){
                  el2.value=eval(3.6 * el1.value);
         }else if(val1 = 'kmh'){
                  el2.value=roundUp(eval(0.277778 * el1.value), 2);
         }

}

function roundUp(num, precision) {
         precision = Math.pow(10, precision)
         return Math.ceil(num * precision) / precision
         }