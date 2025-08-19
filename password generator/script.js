let passbox = document.getElementById("passbox");
let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copy = document.getElementById("copy")

slidervalue.textContent = inputslider.value 
inputslider.addEventListener('input' , ()=>{
    slidervalue.textContent = inputslider.value
 });

 genbtn.addEventListener('click' , ()=>{
    passbox.value = generatepassword();
 })

 let lowerchars = "abcefghijklmnopqrstuvwxyz" ;
 let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
 let allnumbers = "0123456789" ; 
 let allsymbols = "!@#$%^&*" ;

 function generatepassword(){
    let genpassword = "";
    let allchars ="";

    allchars += lowercase.checked ? lowerchars :"" ;
    allchars += uppercase.checked ? upperchars :"" ;
    allchars += numbers.checked ? allnumbers : "" ;
    allchars += symbols.checked ? allsymbols : "" ;

    if(allchars == "" || allchars.length == 0){
        return genpassword;
    }
 let i = 1;
 while(i<=inputslider.value){
    genpassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
    i++;
 }
 return genpassword;

}
copy.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copy.title = "password copied";
    }
});