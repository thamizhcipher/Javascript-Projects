var inputBtn=document.getElementById('save-btn');
let myLeads=[];
let inputEl=document.getElementById('txt');
let ulEl=document.getElementById('ul');
var deleteBtn=document.getElementById('delete-btn');
var tabBtn=document.getElementById('save-tab');


// eventListeners
inputBtn.addEventListener('click',logOut);
inputEl.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
        logOut();
    }
});
tabBtn.addEventListener('click',saveTab);
deleteBtn.addEventListener('dblclick',deleteOption);

const storedData=JSON.parse(localStorage.getItem("myLeads"));
// console.log(storedData);

if(storedData){
    myLeads=storedData;
    render(myLeads);
}

    
function logOut(){
        if(inputEl.value==""){
            inputEl.value=prompt('Please add something');
        }
        myLeads.push(inputEl.value);
        inputEl.value="";
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
}
   
function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
        // listItems+="<li><a href='#' target='_blank'>"+myLeads[i]+" </a></li>"
        listItems+=`<li> 
                       <a href='${leads[i]}'target='_blank'> ${leads[i]} </a>
                    </li>`
    }
    ulEl.innerHTML=listItems;
    }

function deleteOption(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
}


function saveTab(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads',JSON.stringify(myLeads));
        render(myLeads);    

    });
}    