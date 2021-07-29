import { birthData } from "./data.js";

console.log(birthData);
const testForm = document.getElementById("test");
const year = document.getElementById("year");
const month = document.getElementById("month");
const dateV = document.getElementById("date");
const result = document.querySelector('#result p');
let timeOut = null;

function getPastLife() {
  const y = birthData.year[year.value]; // 0 ~ 9
  const m = birthData.month[month.value - 1]; // 1 ~ 12
  const d = birthData.date[date.value - 1];   // 1 ~ 31
  console.log(y, m, d);

  const resultText = `${y} ${m} ${d}`.split('');
  let i = 0;

  function showResult() {
    timeOut = setTimeout(function() {
      result.innerHTML += resultText[i];
      i++;
      if(i < resultText.length) {
        showResult();
      }
    }, 250);
  }

  showResult();

}

testForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // 버튼을 재차 누를 시 결과 출력 초기화
  clearTimeout(timeOut);
  result.innerHTML = '';

  // 결과 출력
  getPastLife();

});