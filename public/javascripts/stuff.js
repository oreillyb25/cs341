//<!--from freecodecamp.org : should hold the ref to the order submit-->
let ord = document.getElementById('submit');
const btn = document.querySelector("button");
//ord.addEventListener('click', displayEvent); 
let msg = document.getElementById('notes');
let bye = document.getElementById('later');
let notwo = document.getElementById('txt');
let t = document.getElementById('tired');
//console.log(msg.value);  
let dropdown = document.getElementById('topping');
let t_cherry = document.getElementById('cherry');
let t_plain = document.getElementById('plain');
let t_choc = document.getElementById('chocolate');
//let mon = document.getElementById('month');
//mon.addEventListener("mouseover", mouseOver);
ord.addEventListener("click", Example);
function Example(event) {
    event.preventDefault();
    console.log(msg.value);
    //window.alert(msg.value);
    if(msg.value.includes("vegan")){
        window.alert("WARNING!!!!! cheesecake contains dairy");
    }
    else {
        var flavor;
        //window.alert(msg.value);
        if(document.getElementById('chocolate').checked) {
            flavor = "chocolate";
        }
        else if (document.getElementById('cherry').checked) {
            flavor = "cherry";
        }
        else{
            flavor = "plain";
        }
        //window.alert(t.value);
        bye.replaceChildren(); 
        notwo.replaceChildren();  
        var newE = "Thank you! Your order has been placed. Your order details: " + dropdown.value + " of " + flavor +". Your notes: " + msg.value;
        t.replaceWith(newE);
    }
}