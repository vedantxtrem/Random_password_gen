const n = document.querySelector("input[id=length]");
function bigchecked( ){
    let big
    if(document.getElementById("uper").checked == true){
      big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return big;
}
function smchecked( ){
    let sm
    if(document.getElementById("lower").checked == true){
      sm = "abcdefghijklmnopqrstuvwxyz";
    }
    return sm;
}
function numchecked( ){
    let num
    if(document.getElementById("num").checked == true){
      num = "1234567890";
    }
    return num;
}
function sigchecked( ){
    let sig
    if(document.getElementById("symbol").checked == true){
      sig = "!@#$%^&*";
    }
    return sig;
}
const btn = document.getElementById("button");
const randompassword = () =>{
    let big = bigchecked();
    let sm = smchecked();
    let num = numchecked();
    let sig = sigchecked();
    let res = "";
    for(let i=0;i<n.value;i++){
      res = big[Math.floor(Math.random()*25)].concat(sm[Math.floor(Math.random()*25)]).concat(num[Math.floor(Math.random()*9)]).concat(sig[Math.floor(Math.random()*7)])  
    }
    return res;
};


button.addEventListener("click",function printer(){
    document.getElementById("pass").value = randompassword();
});
