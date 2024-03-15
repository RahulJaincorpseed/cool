// Length of Last Word

var lengthOfLastWord = function (s) {
  let trimData = s.trim()
  let data = trimData.split(" ")
  return data[data.length - 1].length
}
