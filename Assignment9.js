var obj={ 
      first_name:"Akshay",
      last_name:"Shelke",
      age:24,
      email:"akshayshelke7066@gmail.com",
      student:[
             {
               name:"Vijay",
               mark:22,
             },
             {
               name:"Ajay",
               mark:32,
             },
             {
               name:"Ganesh",
               mark:29,
             },
             {
               name:"Yash",
               mark:33,
             },
             {
               name:"Sachin",
               mark:39,
             },
             {
               name:"Jayesh",
               mark:35,
             },
             { 
               name:"Vishal",
               mark:0, 
             },

]
};
var num=parseInt(prompt("Please enter a number"));
if(isNaN(num)){
    alert("Please enter a valid mumber");
} else{ 
     count=0;
     var studentlength=obj.student.length;  
     var num1=obj.student   
     for(var i=0; i<studentlength; i++){ 
          var score=(num1[i].mark);
          if(score>=num){ 
                console.log(obj.student[i].name);
                console.log(obj.student[i].mark);
                count++;
          }
     
}
console.log(count+" student have scored equal to or more then those mark");

};
