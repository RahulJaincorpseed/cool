// Merge Ulternatily

var mergeAlternately = function (word1, word2) {
  let result = ""
  let len = Math.max(word1.length, word2.length)

  for (let i = 0; i < len; i++) {
    result += word1.charAt(i)
    result += word2.charAt(i)
  }

  return result
}
