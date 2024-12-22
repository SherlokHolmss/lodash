// const _ = require('lodash');

// const arr = [1,1,2,2,3,3,3,4,5,6,6];
// let result = _.uniq(arr);
// console.log(result);

// window.addEventListener("scroll",_.throttle(() => {
//     console.log('Scroll event handler invocation every 1000ms.');
//   }, 1000),)

// window.addEventListener("scroll",(()=>{ console.log("Hello")}));

// window.addEventListener("scroll",)



document.querySelector('input').addEventListener(
    'input',
    _.debounce(() => {
      console.log(
        'Input event handler invocation after 2000ms of inactivity past burst.',
      );
    }, 2000),
  );