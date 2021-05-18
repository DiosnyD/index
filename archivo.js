var dat;
var op;

function mostrar(num) {
    var antes= document.getElementById("barra").value;
    
    if (antes==0) {
        document.getElementById("barra").value=num;
    } else {
        document.getElementById("barra").value=antes+num;
    }
}

function operacion(opera) {
    dat=document.getElementById("barra").value;
    document.getElementById("barra").value=0;
    op=opera;
}

function expre(){
    var num=document.getElementById("barra").value;

    switch (op){
        case '+': document.getElementById("barra").value= parseInt(dat) + parseInt(num);
        break;
        case '-': document.getElementById("barra").value= dat-num;
        break;
        case '*': document.getElementById("barra").value= dat*num;
        break;
        case '/': document.getElementById("barra").value= dat/num;
        break;
    }
}
function limpio(){
    document.getElementById("barra").value="";
}