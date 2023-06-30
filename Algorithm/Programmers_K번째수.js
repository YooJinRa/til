/** K 번째 수
 * - 문제 설명
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 * 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 * a배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
 * commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아
 * return 하도록 solution 함수를 작성해주세요.
 *
 * - 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/42748
 */

/** 내가 푼 풀이 */

function solution(array, commands) {
  const answer = commands.map((targetArray) => {
    const i = targetArray[0];
    const j = targetArray[1];
    const k = targetArray[2];
    const sortArray = array.slice(i - 1, j).sort((a, b) => a - b);

    return sortArray[k - 1];
  });

  return answer;
}

/** 다른 사람의 풀이에 대해 인상 깊었던 부분은 나는 i, j, k를 각각 변수에 할당하고,
 * 그 변수를 이용해서 문제풀이를 진행하였는 데,
 * const [i, j, k] = targetArray;
 * 이런 식으로 구조분해 할당을 하여 풀이한 부분이 인상 깊었다.
 *
 * 그동안 개발을 하면서 구조분해할당을 많이 사용했었는 데,
 * 제대로 모르고 사용하고 있었던 거 같아서 이번 기회에 구조분해 할당에 대해 특징을 이해해보고자 공부를 하게 되었다.
 * https://github.com/YooJinRa/til/blob/main/Javascript/DestructuringAssignment.md
 *
 * 공부를 진행해 보니, 그동안 자연스럽게 사용하고 있었던, React의 useState, useEffect 등의 Hook에서도
 * 구조분해 할당을 사용하고 있었고,
 * 내가 만들었던 custom hooks의 기본 원리도 구조분해 할당이었다.
 *
 * 추가적으로 구조분해할당의 다른 특징을 알게 되었고,
 * 앞으로 개발을 진행할 때는 구조분해할당을 의식하며, 더 효율적인 코드를 작성할 수 있도록 노력해야겠다.
 */
