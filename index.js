
const btn = document.getElementById("button");
const randompassword = () =>{
    let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sm = "abcdefghijklmnopqrstuvwxyz"
    let num = "1234567890";
    let sig = "!@#$%^&*";
    let res;
    for(let i=0;i<8;i++){
      res = big[Math.floor(Math.random()*25)].concat(sm[Math.floor(Math.random()*25)]).concat(num[Math.floor(Math.random()*9)]).concat(sig[Math.floor(Math.random()*7)])  
    }
    return res;
};


button.addEventListener("click",function printer(){
    document.getElementById("pass").value = randompassword();
});
