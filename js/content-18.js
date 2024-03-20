
function  btn_1(){
    const p = document.querySelector('.one')
    const rotated = document.querySelector('.first');
    if (p.style.display === "none"){
        p.style.display = "block";
        rotated.style.transform = 'rotate(90deg)';
    }else {
        p.style.display = "none";
        rotated.style.transform = 'rotate(360deg)';
    }
    
     
}

function  btn_2(){
    const p = document.querySelector('.two')
    const rotated = document.querySelector('.second');
    if (p.style.display === "none"){
        p.style.display = "block";
        rotated.style.transform = 'rotate(90deg)';
    }else {
        p.style.display = "none";
        rotated.style.transform = 'rotate(360deg)';
    }

}

function  btn_3(){
    const p = document.querySelector('.three')
    const rotated = document.querySelector('.third');
    if (p.style.display === "none"){
        p.style.display = "block";
        rotated.style.transform = 'rotate(90deg)';
    }else {
        p.style.display = "none";
        rotated.style.transform = 'rotate(360deg)';
    }

}



