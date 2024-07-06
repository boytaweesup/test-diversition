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

    let outputRandom = myRandom(100, 999);
    let Random2_out1 = myRandom(100, 999);
    let Random2_out2 = myRandom(100, 999);
    let Random2_out3 = myRandom(100, 999);
    let Sidereword_1 = outputRandom - 1;
    let Sidereword_2 = outputRandom + 1;



    let site = ((outputRandom).toString());
    let num2 = '';
    for (let i = 1; i < site.length; i++) {
        num2 += site[i];
    }
    console.log(outputRandom);
    console.log(Sidereword_1);
    console.log(Sidereword_2);
    console.log(Random2_out1);
    console.log(Random2_out2);
    console.log(Random2_out3);
    console.log(num2);



    reward_1.innerHTML = outputRandom;
    SidePrize_1.innerHTML = Sidereword_1;
    SidePrize_2.innerHTML = Sidereword_2;
    reward_2out1.innerHTML = Random2_out1;
    reward_2out2.innerHTML = Random2_out2;
    reward_2out3.innerHTML = Random2_out3;
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

    

    if (number == outputRandom) {
        outputCheck.innerHTML =
         "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 1 </h5> <h4> " + outputRandom  + " </h4>  <h5>และ รางวัลเลขท้าย 2 ตัว</h5>  <h4>" + num2 + "</h4></div> " ;
    }else if (number == Sidereword_1) {
        outputCheck.innerHTML = 
        "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! รางวัลเลขข้างเคียงรางวัลที่ 1 </h5> <h4> " + Sidereword_1  + " </h4> </div> " ;
    }else if (number == Sidereword_2) {
        outputCheck.innerHTML = 
        "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! รางวัลเลขข้างเคียงรางวัลที่ 1 </h5> <h4> " + Sidereword_2  + " </h4> </div> " ;
    }else if (number == Random2_out1) {
        outputCheck.innerHTML = 
        "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 2 </h5> <h4> " + Random2_out1  + " </h4> </div> " ;
    }else if (number == Random2_out2) {
        outputCheck.innerHTML = 
        "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 2 </h5> <h4> " + Random2_out2  + " </h4> </div> " ;
    }else if (number == Random2_out3) {
        outputCheck.innerHTML = 
        "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลที่ 2  </h5> <h4> " + Random2_out3  + " </h4> </div> " ;
    }else if (outNum2 == num2) {
        outputCheck.innerHTML = 
        "<div class=\"alert alert-info\"><h5>ยินดีด้วย!!! คุณถูกรางวัลเลขท้าย 2 ตัว </h5> <h4> " + num2  + " </h4> </div> " ;
    }else {
        outputCheck.innerHTML = "<div class=\"alert alert-danger\">เสียใจด้วยคุณไม่ถูกรางวัล </div> ";
        
    }
    return outNum2;
    
}

checkButton.addEventListener('click', checkreward)
numberInput.addEventListener('change', checkreward)



