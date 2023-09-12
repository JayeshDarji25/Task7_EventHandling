const btn = document.querySelector("button");
const inp = document.querySelector("input");
const para = document.querySelector("p");
const head1 = document.querySelector("h1");

btn.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log(inp.value);
    para.innerText = `My Name is ${inp.value}`;
})

inp.addEventListener("keyup",()=> {
    head1.innerText = `You added ${inp.value}`;
})