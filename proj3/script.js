const course=[
  {
    name:"React course",
    price:"2.3"
  },
  {
    name:"Angular course",
    price:"2.8"
  },
  {
    name:"Mern course",
    price:"3.3"
  },
  {
    name:"Django course",
    price:"1.2"
  },
]
// <li class=list-group-item> Angular course</li>
//  <span class=float-right> </span>

function generateList(){
  const ul=document.querySelector(".list-group");
  ul.innerHTML="";
  course.forEach( course =>{

    const li=document.createElement("li");
    li.classList.add("list-group-item");
    
    const name=document.createTextNode(course.name);
    li.appendChild(name);

    const span=document.createElement("span");
    span.classList.add("foalt-right");

    const price=document.createTextNode("$"+course.price);
    span.appendChild(price);
    
    li.appendChild(span);
    ul.appendChild(li);

  });
}
// genrateList() or
window.addEventListener("load",generateList);


const button1=document.querySelector(".sort-btn");
button1.addEventListener("click", () =>{
    course.sort( (a,b) => a.price-b.price )
    generateList()
});

const button2=document.querySelector(".btn-primary");
button2.addEventListener("click",()=>{
       course.sort( (a,b) => b.price-a.price)
       generateList()
})