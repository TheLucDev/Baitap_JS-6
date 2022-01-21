function bai3(){
    var num3 = document.getElementById("numberN3").value*1;

    if(num3 === 0){
        document.getElementById("kqBai3").innerText = "Kết quả giai thừa là : 0";
    }
    else{
        var giaiThua = 0;
        var tongGiaiThua = 1;
        for(k=1;k<=num3;k++){
            giaiThua = k ;
            tongGiaiThua = tongGiaiThua*giaiThua;
        }
        document.getElementById("kqBai3").innerText = "Kết quả giai thừa là : " + tongGiaiThua;
    }
}