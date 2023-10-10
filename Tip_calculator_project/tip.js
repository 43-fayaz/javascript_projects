var button=document.querySelector("button")
var output=document.querySelector(".output")
console.log(button)
button.innerText="TOTAL"
button.addEventListener("click",function()
{
    const input=document.querySelector("input")
    console.log(input.value*10);
    const tip=input.value*0.1;
    var temp='<h1>you need to tip '+tip+ ' rupees on '+input.value +' rupees</h1>';
    output.innerHTML=temp;
})
/*
console.log(temp)
var temp=document.querySelectorAll("button")
console.log(temp[0])

*/