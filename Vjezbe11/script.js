let autoclear = false;
function input(val){
         if(autoclear){
                  document.getElementById('rez').value = ""
         }
         autoclear = false;
         document.getElementById('rez').value= document.getElementById('rez').value += val;
}

function calc(){
         document.getElementById('rez').value = eval(document.getElementById('rez').value);
         autoclear = true;
}

function clr(){
         document.getElementById('rez').value = "";
         autoclear = false;
}