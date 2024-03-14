// Print 1 To N Without Loop
// Program of Print 1 to N without Loop

class Solution{
    printNos(N){
        //code here
      if(N==0){
          return;
      }
      console.log(N);
      printNos(N-1)
        
    }
}
