

document.getElementById("btn").onclick=function(){
let data=document.getElementById("text1").value;
let del=document.getElementById("del")
let ul=document.getElementById("list-items");
let li=document.createElement("li")
ul.append(li);
li.textContent=data;
ul.append(del)
// code to remove element stored data


console.log(data,typeof(data))



}
