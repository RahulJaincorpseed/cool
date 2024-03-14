// Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function(word1, word2) {
    const word3 = word1.join('');
    const word4 = word2.join('');

    if(word3 === word4){
        return true;
    }
    else{
        return false
    }
};