// Program of Reverse a String 

class Solution {
    
    reverseWord(str){
        //Your code here
        let rev = "";
        for(let i=str.length-1; i>=0;i--){
            rev = rev + str.charAt(i);
        }
        return rev
    }
}