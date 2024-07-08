// Math.random

let randomButton = document.getElementById('random-button');
let reward_1 = document.getElementById('reward_1');
let reward_2out1 = document.getElementById('reward_2out1');
let reward_2out2 = document.getElementById('reward_2out2');
let reward_2out3 = document.getElementById('reward_2out3');
let SidePrize_1 = document.getElementById('SidePrize_1');
let SidePrize_2 = document.getElementById('SidePrize_2');
let reward_num2 = document.getElementById('reward_num2');



function myRandom(min, max) {
    const N = max - min + 1;
    return Math.floor(Math.random() * N) + min;

}

var arr = [''];
for (let i = 0; i < 4; i++) {
    arr.push(myRandom(100, 999));
    console.log(arr);
}
let Sidereword_1 = arr[1] - 1;
let Sidereword_2 = arr[1] + 1;

let num2 = (myRandom(10, 99));

// let site = ((arr[1]).toString());
// let num2 = '';
// for (let i = 1; i < site.length; i++) {
//     num2 += site[i];
// }
reward_1.innerHTML = arr[1];
SidePrize_1.innerHTML = Sidereword_1;
SidePrize_2.innerHTML = Sidereword_2;
reward_2out1.innerHTML = arr[2];
reward_2out2.innerHTML = arr[3];
reward_2out3.innerHTML = arr[4];
reward_num2.innerHTML = num2;




// CHECK->>> Math.random

let numberInput = document.getElementById('number-input');
let checkButton = document.getElementById('check-button');
let outputCheck = document.getElementById('output-check');
let outputCheckFalse = document.getElementById('output-check-false');


function checkreward() {
    let siteNum2 = ((numberInput.value).toString());
    let outNum2 = '';
    for (let i = 1; i < siteNum2.length; i++) {
        outNum2 += siteNum2[i];
    }
    console.log(outNum2);

    let number = Number(numberInput.value);


    
    if ((number == arr[1]) && (outNum2 == num2)) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 1 </h5> <h4> " + arr[1] + " </h4> <h5>และ รางวัลเลขท้าย 2 ตัว</h5>  <h4>" + num2 + "</h4> </div> ";
    } else if (number == arr[1]) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 1 </h5> <h4> " + arr[1] + " </h4>  </div> ";
    } else if (number == Sidereword_1) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! รางวัลเลขข้างเคียงรางวัลที่ 1 </h5> <h4> " + Sidereword_1 + " </h4> </div> ";
    } else if (number == Sidereword_2) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! รางวัลเลขข้างเคียงรางวัลที่ 1 </h5> <h4> " + Sidereword_2 + " </h4> </div> ";
    } else if (number == arr[2]) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 2 </h5> <h4> " + arr[2] + " </h4> </div> ";
    } else if (number == arr[3]) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 2 </h5> <h4> " + arr[3] + " </h4> </div> ";
    } else if (number == arr[4]) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 2  </h5> <h4> " + arr[4] + " </h4> </div> ";
    } else if (outNum2 == num2 || number == num2 ) {
        outputCheck.innerHTML =
            "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลเลขท้าย 2 ตัว </h5> <h4> " + num2 + " </h4> </div> ";
    } else {
        outputCheck.innerHTML = "<div class=\"alert alert-danger\">เสียใจด้วยคุณไม่ถูกรางวัล </div> ";

    }
    
}

checkButton.addEventListener('click', checkreward)
numberInput.addEventListener('change', checkreward)



