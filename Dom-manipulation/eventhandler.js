const hlo=document.querySelector(".userList");
// console.log(userList);
const button=document.querySelector(".btn");
const text=document.querySelector(".title");

// text.style.color="red";
text.classList.add("change");

// button.addEventListener
// ('click',function(){
//   text.classList.add("change");
// })

// for(user of hlo){
//     user.addEventListener("click",function(){
//         this.style.color="red";
//     })
//     console.log(hlo);
// }

const ListInput = document.querySelector('.addList');

button.addEventListener('click',function(){
    // create an li with some value
    const newLi=document.createElement('li');
    var LiContent=document.createTextNode(ListInput.value);
    

// add the input with newLi
  newLi.appendChild(LiContent);
//   add the newLi with the list which is already there;
  
  hlo.appendChild(newLi);
 ListInput.value="";
  
});
