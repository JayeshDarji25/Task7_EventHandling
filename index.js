const btn = document.querySelector("button");
const inp = document.querySelector("input");
const para = document.querySelector("p");
const head1 = document.querySelector("h1");


console.log("First");

btn.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log("Click");
    para.innerText = `My Name is ${inp.value}`;
})

console.log("Second");

setTimeout(()   => {
    console.log('After 1 second');
}, 0);

console.log("Third");

inp.addEventListener("keyup",()=> {
    console.log("Keyup");
    head1.innerText = `You added ${inp.value}`;
})
console.log("Fourth");
