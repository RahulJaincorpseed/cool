// 2114. Maximum Number of Words Found in Sentences


var mostWordsFound = function(sentences) {
    let sum = 0;
   let maxSum = 0;

   for(let i=0;i<sentences.length;i++){
      let data =  sentences[i].split(' ').length
      if(maxSum < data){
       maxSum = data
      }
   }
   return maxSum
};