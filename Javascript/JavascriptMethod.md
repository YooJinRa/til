# Javascript Method LIST
- 📌 공부한 Method 정리하기 위함
- 📌 오름차순 정리

-----

- ⭐⭐ **Array.from** : 두 번째 인수로 전달한 콜백함수에 첫 번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달하면서 호출하고, 콜백함수의 반환값으로 구성된 배열을 반환 <br />
> ::: `Array.from({ length:3 }, (_, i)=> i); // [0, 1, 2]`<br />
- **Array.isArray** : 전달된 인수가 배열이면 true, 배열이 아니면 false 반환<br />
- **Array.of** : 전달된 인수를 요소로 갖는 배열을 생성<br />
- **Array.prototype.concat** : 인수로 전달된 값들(배열 또는 원시값)을 원본 배열 마지막 요소에 추가한 새로운 배열 반환 <br />
> ::: **_원본배열 변경 X_**<br />
- ⭐⭐⭐ **Array.prototype.every** : 콜백 함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false 반환<br />
- ⭐⭐⭐ **Array.prototype.fill** : 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채움 <br />
> ::: **_원본배열 직접 변경_** <br />
> ::: **_Array.from_ 메서드와 함께 자주 사용**<br />

- ⭐⭐⭐ **Array.prototype.filter** : 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출 + 콜백함수의 반환값이 true 인 요소들만 구성된 새로운 배열 반환 <br />
> ::: **_새로운 배열 / 원본 배열 변경 X_** <br />
> ::: `[1, 2, 3].filter((item, index, arr) => { console.log('item' : ${item}, 'index' : ${index}, 'this' : ${JSON.stringify(arr)}); }) // item : 1, index : 0, this: [1, 2, 3]`<br />
- ⭐⭐⭐ **Array.prototype.find** : 자신이 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소로 반환, true요소가 존재하지 않는다면 undifined를 반환<br />
- ⭐⭐⭐ **Array.prototype.findIndex** : 자신이 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소의 인덱스로 반환, true요소가 존재하지 않는다면 -1로 반환<br />
- **Array.prototype.flat** : 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화, 인수를 생략할 경우 기본값1, 인수로 Infinity를 전달하면 중첩배열 모두 평탄화<br />
- **Array.prototype.flatMap** : map 메서드를 통해 생성된 새로운 배열을 평탄화 함. 단, 1단계만 평탄화<br />
- ⭐⭐⭐ **Array.prototype.forEach** : 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출 <br />
> ::: **_원본배열 직접 변경_** <br />
> ::: `[1, 2, 3].forEach((item, index, arr) => { console.log('item' : ${item}, 'index' : ${index}, 'this' : ${JSON.stringify(arr)}); }) // item : 1, index : 0, this: [1, 2, 3]`<br />
- ⭐ **Array.prototype.includes** : 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환 <br />
> ::: `.includes(element, length) 배열내 특정요소 포함되어 있는지, 인수검색 시작 인덱스`<br />

- ⭐ **Array.prototype.indexOf** : 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환(포함되지 않으면 -1 반환)<br />
- ⭐ **Array.prototype.join** : 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열로 반환, 기본구분자는 콤마<br />
- ⭐⭐⭐ **Array.prototype.map** : 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출 + 콜백함수의 반환값들로 구성된 새로운 배열 반환 <br />
> ::: **_새로운 배열_** <br />
> ::: `[1, 2, 3].map((item, index, arr) => { console.log('item' : ${item}, 'index' : ${index}, 'this' : ${JSON.stringify(arr)}); }) // item : 1, index : 0, this: [1, 2, 3]`<br />

- **Array.prototype.pop** : 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환, 원본 배열이 빈배열이면 undifined 반환 <br />
> ::: **_원본배열 직접 변경_**<br />
- ⭐ **Array.prototype.push** : 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환 <br />
> ::: **_원본배열 직접 변경_**<br />

- ⭐⭐⭐ **Array.prototype.reduce** : 자신이 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출 + 콜백함수의 반환값을 다음 순회시에 콜백 하수의 첫번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환 <br />
> ::: **_원본 배열 변경 X_** <br />
> ::: **_하나의 결과값을 반환_**<br />
- ⭐ **Array.prototype.reverse** : 원본 배열의 순서를 반대로 뒤집음 <br />
> ::: **_원본배열 직접 변경_**<br />
- **Array.prototype.shift** : 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환, 원본 배열이 빈배열이면 undifined 반환 <br />
> ::: **_원본배열 직접 변경_**<br />
- **Array.prototype.slice** : 인수로 전달된 범위의 요소들을 복사하여 배열로 반환 <br />
> ::: **_원본배열 변경 X_** <br />
> ::: `.slice(start, end)` <br />
> ::: 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환 <br />
> ::: `const _arr = arr.slice() === const _arr = [...arr]`<br />
- ⭐⭐⭐ **Array.prototype.some** : 배열의 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는지 확인하여 그 결과를 불리언 타입으로 반환, 빈 배열인 경우 언제나 false 반환<br />
- ⭐ **Array.prototype.sort** : 배열 요소 정렬<br />
> ::: 문자 요소 정렬 - 기본적으로 오름차순으로 요소 정렬 / 내림차순 요소 정렬 sort().reverse())<br />
> ::: 숫자 요소 정렬 - 오름차순 .sort((a, b) => a-b) / 내림차순 .sort((a, b) => b-a)  <br />
> ::: **_원본배열 직접 변경_** <br />
- ⭐ **Array.prototype.splice** : 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 사용, 3개의 매개변수가 있음<br />
> ::: **_원본배열 직접 변경_**  <br />
> ::: `.splice(start, deleteCount(option), items(option))` <br />
- **Array.prototype.unshift** : 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length프로퍼티 값을 반환 <br />
> ::: **_원본배열 직접 변경_** <br />









