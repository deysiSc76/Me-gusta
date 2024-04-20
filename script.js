var count = 9;
var count2= 13;
var count3= 9;
var elemetoAumentar = document.querySelector("#cantidadLikes");
var elemetoAumentar2=document.querySelector("#cantidadLike2");
var elemetoAumentar3=document.querySelector("#cantidadLike3");
function aumentarLike(){
    count++;
    elemetoAumentar.innerHTML = count + "Like(s)";
}
function aumentarLike2(){
    count2++;
    elemetoAumentar2.innerHTML = count2 + "Like(s)";
}
function aumentarLike3(){
    count3++;
    elemetoAumentar3.innerHTML = count3 + "Like(s)";
}
