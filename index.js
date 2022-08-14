 const dodger = document.getElementById ("dodger");

 const left = dodger.style.left;
 const leftNumbers = dodger.style.left.replace("px","");
 const leftpx = parseInt(leftNumbers, 10);

 function moveDodgerLeft() {
    dodger.style.left= `${leftpx - 10}px`;

 }

 function moveDodgerRight() {
    dodger.style.left = `${leftpx + 10}px`;
 }
