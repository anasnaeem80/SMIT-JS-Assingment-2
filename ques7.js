const myObject = {
    name : "john doe",
    age : 32,
    gender : "male",
    profession : "optician" 
  }
  window.localStorage.setItem("myObject", JSON.stringify(myObject));
  
  let newObject = window.localStorage.getItem("myObject");
  console.log(JSON.parse(newObject));
  
  var myData = localStorage.getItem('myDataStorage');
  var myDataObj = JSON.parse(myData);