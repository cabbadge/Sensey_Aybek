(function (){
    'use strict';
})();





const arr = ['sher', 'Aybek'];
const newarr =[];
// const res = arr.forEach(item => {
//     console.log(item);
//     return item;
// });
// console.log(res);
const res = arr.map(item => {
  for (let i=0; i<arr.length;i++){
    const res = item;


    return ("I'm " + item);
    
  }
  newarr[item]=res;
});
console.log(newarr);

// const obj = {
//     a: 1,
//     b: 2,
// };

const usernames = ['aybek', 'sher'];

const users ={

    aybek: 1,
    sher: 2,
};

usernames.forEach(item => {
   console.log(users[item]);
   return item;
});







// console.log({res});
// // forEach => undfnd
// // map => []



// console.log(heart1);

  // arr.map((item) => {
  //   console.log(item + ' from map')
  // });


//   const arr = [1, 2, 3];

// const myMap = (arr, func) => {
//     const localArr = [];
//     for(let i = 0; i < arr.length; i++) {
//       const res = func(arr[i]);
//       localArr[i] = res;
//     }
//     return localArr;
//   };

 

//   const res = myMap(arr, (item) => {
//     // console.log(item + ' from my function');
//     return 'I\'m ' + item;
//   });
//   console.log(res);







// const items = ['item1', 'item2', 'item3'];
// const copy = [];


// items.forEach(function(){
//     for(let i=0;i<items.length;i++){
//         const res =items[i];
//         copy[i]=res;
        
//     }
// });

// console.log(copy); 







// const box = document.getElementById('box');

// const button= document.getElementsByTagName('button');

// const circle = document.getElementsByClassName('circle');

// const heart1=document.querySelectorAll('.heart');

// const wrapper= document.querySelector('.wrapper');


// box.style.backgroundColor='blue';
// box.style.width='500px';

// button[1].style.borderRadius='100%';

// circle[0].style.backgroundColor='red';

// box.style.cssText= 'backraund-color=red;';

// // for (let i=0; i< heart1.length;i++){
// //   heart1[i].style.backgroundColor='blue';
// // }


// heart1.forEach(item => {
//   item.style.backgroundColor='blue';
// });

// const div = document.createElement('div');

// div.classList.add('black');

// // document.body.append(div);

// wrapper.append(div);

// wrapper.appendChild(div);

//  wrapper.prepend(div);
// heart1[0].before(div);
// heart1[0].after(div);


// wrapper.insertBefore(div, heart1[0]);

// circle[0].remove();
// wrapper.removeChild(heart1[1]);

// heart1[0].replaceWith(circle[0]);
// wrapper.replaceChild(circle[0], heart1[0]);

// div.innerHTML = '<h1>Hello world</h1>';
// div.textContent='<h1>Hello world</h1>';

// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML("beforebegin", '<h2>Hello sheron</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');




// const localArr=[];
// const arr=[1,2,3];
// arr.forEach(item =>{
//   for(let i=0; i<arr.length;i++){
//     const res =arr[i];
//     localArr[i]=res;

//   }
// });
// console.log(localArr);