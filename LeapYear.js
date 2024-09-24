function isLeap(year) {
    
        var answer;
        
        //Write your code here.  
        if(year % 4 === 0 && year % 100 !== 0 ){
            answer = "Leap year.";
        }
        else if (year % 100 === 0){
            if(year % 400 === 0){
                answer = "Leap year.";
            } 
            else{
                answer = "Not leap year."
            }
        }
        else {
            answer = "Not leap year."
        }
        
        
        return answer;
            
    }