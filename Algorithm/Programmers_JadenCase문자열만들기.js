function solution(s) {
  const word = String(s).split(' ');
  let changeSentense = [];

  for (let i = 0; i < word.length; i++) {
    let changeWord = [];

    for (let j = 0; j < word[i].length; j++) {
      j === 0
        ? changeWord.push(word[i][j].toUpperCase())
        : changeWord.push(word[i][j].toLowerCase());
    }

    changeSentense.push(changeWord.join(''));
  }

  return changeSentense.join(' ');
}
