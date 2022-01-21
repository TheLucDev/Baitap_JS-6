function Bai5(num5){

    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    let flag = 1;

    if (num5 <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i < num5){
        if( num5%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }
    return flag;
}
function kqBai5(){
    var num5 = document.getElementById("numberN5").value*1;
    let i = 0, check=0, result ="";
       while ( i <= num5){
        check = Bai5(i);
        if( check == 1 ) result += i + " ";
        ++i;
    }
    document.getElementById("kqSoNguyenTo").innerText = "Số nguyên tố : " + result;
}


