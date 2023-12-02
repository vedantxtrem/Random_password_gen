
const btn = document.getElementById("btn");
const randompassword = () =>{
    let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sm = "abcdefghijklmnopqrstuvwxyz"
    let num = "1234567890";
    let sig = "!@#$%^&*";
    
    for(let i=0;i<8;i++){
        let res  = sm[[Math.floor(Math.random()*25)]]+big[Math.floor(Math.random()*25)]+num[Math.floor(Math.random()*9)]+sig[Math.floor(Math.random()*7)];
    }
    return res;
};
function printer(){
    document.getElementById("pass").value = randompassword();
}

btn.addEventListener("click",printer());
