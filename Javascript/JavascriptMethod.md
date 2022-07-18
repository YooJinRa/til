# Javascript Method LIST
- 알파벳 순으로 정렬해서 정리
- 공부한 Method 정리하기 위함

-----

- **Array.of** : 전달된 인수를 요소로 갖는 배열을 생성
- ⭐⭐ **Array.from** : 두 번째 인수로 전달한 콜백함수에 첫 번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달하면서 호출하고, 콜백함수의 반환값으로 구성된 배열을 반환 ::: `Array.from({ length:3 }, (_, i)=> i); // [0, 1, 2]`
- **Array.isArray** : 전달된 인수가 배열이면 true, 배열이 아니면 false 반환
- ⭐ **Array.prototype.indexOf** : 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환(포함되지 않으면 -1 반환)
- ⭐ **Array.prototype.push** : 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환 ::: **_원본배열 직접 변경_**
- **Array.prototype.pop** : 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환, 원본 배열이 빈배열이면 undifined 반환 ::: **_원본배열 직접 변경_**
- **Array.prototype.unshift** : 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length프로퍼티 값을 반환 ::: **_원본배열 직접 변경_**
- **Array.prototype.shift** : 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환, 원본 배열이 빈배열이면 undifined 반환 ::: **_원본배열 직접 변경_**
- **Array.prototype.concat** : 인수로 전달된 값들(배열 또는 원시값)을 원본 배열 마지막 요소에 추가한 새로운 배열 반환 ::: **_원본배열 변경 X_**
- ⭐ **Array.prototype.splice** : 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 사용, 3개의 매개변수가 있음 ::: **_원본배열 직접 변경_** ::: `.splice(start, deleteCount(option), items(option))`
- **Array.prototype.slice** :
- ⭐ **Array.prototype.join** :
- ⭐ **Array.prototype.reverse** :
- ⭐ **Array.prototype.fill** :
- ⭐ **Array.prototype.includes** :
- **Array.prototype.flat** :
- ⭐ **Array.prototype.sort** :
- ⭐⭐⭐ **Array.prototype.forEach** :
- ⭐⭐⭐ **Array.prototype.map** :
- ⭐⭐⭐ **Array.prototype.filter** :
- ⭐⭐⭐ **Array.prototype.reduce** :
- ⭐⭐⭐ **Array.prototype.some** :
- ⭐⭐⭐ **Array.prototype.every** :
- ⭐⭐⭐ **Array.prototype.find** :
- ⭐⭐⭐ **Array.prototype.findIndex** :
- ⭐⭐⭐ **Array.prototype.flatMap** :




- 