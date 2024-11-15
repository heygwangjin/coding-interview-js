function solution(arr) {
  // sort 메서드의 인자의 리턴값이 음수인 경우 a와 b의 자리를 바꾸지 않는다.
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [1, 1, 2, 2, 3, 4, 5]
console.log(solution([1, 6, 7])); // [1, 6, 7]
