const clock = document.querySelector("#clock");

function currentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// currentTime();
// // 시작하자마자 currentTime을 실행해줘.
// // 이게 없으면 1초 뒤부터 현재시각을 업데이트 해 준다.
// setInterval(currentTime, 1000);
// 1초 뒤부터 1초 마다 currentTime을 실행해줘.
