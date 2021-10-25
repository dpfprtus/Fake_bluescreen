const score = document.querySelector("#score");

let a = 0;
setInterval(() => {
  score.innerText = `${a}% 완료`;
  a += 1;
  console.log(a);
}, 5000);
