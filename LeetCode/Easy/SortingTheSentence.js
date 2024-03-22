// 1859. Sorting the Sentence

var sortSentence = function(s) {
    let str = s.split(' ')
  let sortData =  str.sort((a,b) => a.charAt(a.length -1) - b.charAt(b.length -1))
  let result = [];
  for(let i=0;i<sortData.length;i++){
      let chunk = sortData[i].slice(0, sortData[i].length -1);
      result.push(chunk)
  }

  return result.join(' ')
};