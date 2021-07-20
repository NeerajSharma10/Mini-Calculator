const box = document.querySelectorAll('.box');
const header = document.querySelector('.header');
// console.log(div1);
let str = "";
box.forEach((part) => {
    part.addEventListener('click',(e) =>{
        let input = e.target.innerText;
        if(input == "AC"){
            window.location.reload();
        }
        if(input == "#"){
            alert('😢😢 sorry this is not implemented ');
        }
        if(input == "0" || input == "1" || input == "2" || input == "3" || input == "4" || input == "5" || input == "6" || input == "7" || input == "8" || input == "9"|| input == "%" || input == "/" || input == "*" || input == "-" || input == "+" || input == ".")
        {
             str+=input;
             header.innerText = str;
        }   
        if(input == "x"){
            str = str.substring(0,str.length-1);
            console.log(str.length);
            if(str.length == 0){
                header.innerText = "0";
            }else{
                header.innerText = str;
            }
            
        }
        if(input == "="){
            let ss = header.innerText;
            if(ss.includes("+")){
                let ans = ss.split("+");
                str = String(Number(ans[0])+Number(ans[1]));
                header.innerText = str;
            }else if(ss.includes("*")){
                let ans = ss.split("*");
                str = String(Number(ans[0])*Number(ans[1]));
                header.innerText = str;
            }else if(ss.includes("/")){
                let ans = ss.split("/");
                str = String(Number(ans[0])/Number(ans[1]));
                header.innerText = str;
            }else if(ss.includes("-")){
                let ans = ss.split("-");
                str = String(Number(ans[0])-Number(ans[1]));
                header.innerText = str;
            }else if(ss.includes("%")){
                let ans = ss.split("%");
                str = String(Number(ans[0])%Number(ans[1]));
                header.innerText = str;
            }
        }
    });
});