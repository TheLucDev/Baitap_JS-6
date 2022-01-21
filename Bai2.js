function tinhToan(coSo,soMu){
    var tong = 0;
    var a = 0;
    for(var j=0;j<=soMu;j++){
        a = Math.pow(coSo,j);
        tong = tong + a;
        console.log(tong);
    }
    document.getElementById("kqBai2").innerText = "Tổng S(n) = " + tong ;
}

function bai2(){
    var numX = document.getElementById("numberX").value*1;
    var numN = document.getElementById("numberN").value*1;
    tinhToan(numX,numN);
}
