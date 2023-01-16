function studiji(def){
        let ime= prompt("Unesite vaše ime");
         let prezime = prompt("Unesite vaše prezime")
         let studiji = ""

         switch(def){
                  case "rac":{
                           
                           studiji = "racunarstvo"
                           break;
                  }
                  case "str":{
                           
                           studiji = "strojarstvo"
                           break;
                  }
                  case "el":{
                           
                           studiji = "elektrotehnika"
                           break;
                  }
         }
         alert(ime +  " " + prezime + " upisali ste "+ studiji);

         document.getElementById("bottom-t").innerHTML= ime +  " " + prezime + " upisali ste " + studiji ;
}
