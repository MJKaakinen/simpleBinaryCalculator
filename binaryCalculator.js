let res = document.getElementById('res');
let temp1;
let temp2;
let workMode = '';
let increase = true;
let eq = false;


zeroClicked = event => {
  if (increase){
    adder('0');
  }
  else {
    clear.onclick();
    adder('0');
    increase = true;
  }
}

oneClicked = event => {
  if (increase){
    adder('1');
  }
  else {
    clearClicked();
    adder('1');
    increase = true;
  }
}

clearClicked = event => {
  res.innerHTML = '';
  temp1,temp2 = '';
}

equalClicked = event => {
  (!eq ? (temp2 = parseInt(res.innerHTML,2)) : temp1 = parseInt(res.innerHTML,2));
  res.innerHTML = '';
  switch (workMode) {
    case 'sum':
      adder((temp1+temp2).toString(2));
      break;
    case 'sub':
      adder((temp1-temp2).toString(2));
      break;
    case 'mul':
      adder((temp1*temp2).toString(2));
      break;
    case 'div':
      adder((Math.floor(temp1/temp2)).toString(2));
      break;
  }
  increase = false;
  eq = true;
}

sumClicked = event => {
  workMode = 'sum';
  temp1 = parseInt(res.innerHTML,2);
  increase = false;
  eq = false;
}

subClicked = event => {
  workMode = 'sub';
  temp1 = parseInt(res.innerHTML,2);
  increase = false;
  eq = false;
}

mulClicked = event => {
  workMode = 'mul';
  temp1 = parseInt(res.innerHTML,2);
  increase = false;
  eq = false;
}

divClicked = event => {
  workMode = 'div';
  temp1 = parseInt(res.innerHTML,2);
  increase = false;
  eq = false;
}

function adder(binary) {
  res.innerHTML += binary;
} 

