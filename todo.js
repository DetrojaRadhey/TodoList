let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Remove Task!";
    item.append(dltbtn);
    ul.appendChild(item);
    inp.value = "";
});

// let dltbtns = document.querySelectorAll(".delete");
// for(btn of dltbtns){                                                    wrong method because it can be delete only first 2 li's
//     btn.addEventListener("click",function(){                             so to solve this we can use event deligation(by)=>bubbling
//         let par = this.parentElement;
//         par.remove();
//     });
// } 

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){                                  // indicate on which element this event is worked
        let liitem = event.target.parentElement;
        liitem.remove();
    }
});