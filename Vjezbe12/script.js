function flipimg(){
         var slika1 = document.getElementById('img1').src;
         document.getElementById('img1').src=document.getElementById('img2').src;
         document.getElementById('img2').src=slika1;
}

function delimg(){
         document.getElementById('img1').style.display="none"
         document.getElementById('img2').style.display="none" 
}

function undoimg(){
         document.getElementById('img1').style.display="inline"
         document.getElementById('img2').style.display="inline" 
}

function login(){
         let pass = "nema";
         let usr = prompt("Unesite vase ime");
         if(prompt("Unesite sifru").match(pass)){
                  alert("Login uspjesan");
                  document.getElementById('title').innerHTML = "Pristupili ste stranici kao "+ usr;
                  document.body.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/2/5/3/111542-blue-and-white-background-2560x1600-for-windows-10.jpg')";         
         }else {
                  alert("Login neuspjesan")
         }
}