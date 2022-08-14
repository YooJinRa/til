const data = `12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`;
const arrayData = data.split('\n');

let container = [];
for (let i = 0; i < arrayData.length; i++) {
  if ( i === 0) {
    null
  } else {
    container.push(arrayData[i].split(" "));
  }
}

let first = [];
for(let j = 0; j < container.length; j++) {
  for (let k = 0; k < container[j].length; k++) {
    if(container[j][1]>container[j+1][1]) {
      first.push(container[j]);

    }
  }
}
console.log(first);



