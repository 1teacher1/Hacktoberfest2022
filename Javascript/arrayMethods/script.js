const main = document.getElementById("main");

const arr = [
  "\u{1F984}",
  "\u{1F90C}",
  "\u{1F60F}",
  "\u{1F47B}",
  "\u{1F47D}",
  "\u{1F649}",
];

const newArr = [
  "\u{1F62C}",
  "\u{1F644}",
  "\u{1F47A}",
  "\u{1F984}",
  "\u{1F978}",
  "\u{1F47E}",
  "\u{1F920}",
  "\u{1F90C}",
  "\u{1F60F}",
  "\u{1F47B}",
  "\u{1F47D}",
  "\u{1F649}",
  "\u{1F60E}",
  "\u{1F633}",
  "\u{1F973}",
  "\u{1F978}",
  "\u{1F608}",
  "\u{1F480}",
  "\u{1F921}",
];

const push = () => {
  const i = Math.floor(Math.random() * newArr.length) + 1;
  arr.push(newArr[i]);
  main.className = "transitionedDiv";
  main.innerHTML = arr;
};

const pop = () => {
  arr.pop();
  // main.innerHTML = arr;
  setTimeout(function () {
    main.className = "transitionedDiv";
    main.innerHTML = arr;
  }, 100);
};

const shift = () => {
  //removes from front of the array
  arr.shift();
  main.innerHTML = arr;
};

const unshift = () => {
  // arr.unshift("\u{1F633}");
  //adds infront of the array
  const i = Math.floor(Math.random() * 10) + 1;
  arr.unshift(newArr[i]);
  main.innerHTML = arr;
};
main.innerHTML = arr;
