function hienThi(){
    document.getElementById("content").style.display = "block";

    var x = document.querySelectorAll(".divcontent");
    for(i=0;i<10;i++){
        if (i%2==0) {
            x[i].style.backgroundColor = "blue";
            x[i].style.color = "white";
        }
        else{
            x[i].style.backgroundColor = "red";
            x[i].style.color = "white";
        }
    }
}


