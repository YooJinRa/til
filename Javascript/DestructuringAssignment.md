# 구조분해할당 Destructuring Assignment

## 구조분해할당

- 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식

## 특징

- 변수에 기본값을 할당하면, 분해한 값이 undefined일 때 그 값을 대신 사용

```
const a, b;

[a=5, b=7] = [1];
console.log(a, b); // 1, 7
```

- 구조 분해를 사용하여 함수에서 반환된 배열에 대한 작업을 간결하게 수행할 수 있음

```
function f() {
  return [1, 2];
}

const a, b;
[a, b] = f();
console.log(a, b); // 1, 2

```

- 필요하지 않은 값을 무시할 수 있음

```
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a, b); // 1, 3

```

- 배열을 구조 분해할 경우, 나머지 구문을 이용해 분해하고 남은 부분을 하나의 변수에 할당 가능

```
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

- 객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당 가능

```
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

- 객체로부터 해체된 값이 undefined인 경우, 변수에 기본값을 할당할 수 있음

```
const {a = 10, b = 5} = {a: 3};

console.log(a, b); // 3, 5

```

- 새로운 변수명 할당과 기본값 할당을 한번에 할 수 있음

```
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```

- 계산된 속성 이름(computed property name)은, 객체 리터럴과 비슷하게 구조 분해에도 사용 가능

```
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"

```

- rest 속성은 구조 분해 패턴으로 걸러지지 않은 열거형 속성의 키를 가진 나머지 항목들을 모음

```

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

```

---

## 출처

- [MDN 구조분해할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
