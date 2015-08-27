function LongestWord(sen) { 
	var splitSen = sen.split(' ');
  	 splitSen.sort(function(a,b){
      		return b.length -a.length ;});
 
    
  return splitSen[0]; 
         
}
   
LongestWord("Arguement go here ");                            


function LongestWord(sen) { 
var longest = 0;
var word;
for(var i=; i<sen.length; i++){
  if(sen[i].length > longest){
    longest = sen[i].length;
    word= sen[i];
  		}
	} 
  return word;
}


LongestWord("Arguement go here ");   









                            
                            
                            
  