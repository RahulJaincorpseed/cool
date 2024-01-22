// Program Reverse Word in a Given String

class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        // code here
      const reverseWord =  s.split(".").reverse().join(".");
      return reverseWord;
    }
}