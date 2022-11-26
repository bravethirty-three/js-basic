var arry = [5,8,6,4,2,3,7,9,11,13,3,3,9,5,5,8];
//冒泡
function bubble(arry) {
    for(var i =arry.length ;i>0; i--){
        for(var j = 0 ; j < i-1 ; j++){
            var temp;
            if(arry[j] > arry[j+1]){
                temp = arry[j+1];
                arry[j+1] = arry[j];
                arry[j] = temp;
            }
        }
    }
    return arry;
}
//去重
function noRepeat(arry){
    var newArr = []; 
    for(var i = 0 ; i < arry.length ; i++){
        if(newArr.indexOf(arry[i]) === -1){
            newArr.push(arry[i]);
        }
    }
return newArr;
}

function noRepeat2(arry){
    for (var i = 0 ; i < arry.length ; i++){
        for(var j = 0 ; j < arry.length ; j++){
            if(arry[i] == arry[j] && i != j ){
                arry.splice(j,1);
            }
        }
    }
    return arry;
}

//九九乘法表
 for(var i = 1 ; i <= 9 ; i++){
    var str = " ";
    for(var j = 1 ; j <= i ; j++){
       str +=i + "*" + j + "=" + i*j + " ";
       if(i == j){
        document.write("<br/>");
       }
    }
    console.log(str);
}

var climb = function(i){
    return i <3? n :climb(i-1) + climb(i - 2);
}


var arry2 = noRepeat(arry);
console.log(bubble(arry));
console.log(arry2);
console.log(bubble(arry2));
console.log(noRepeat2(arry));
console.log(climb(5));