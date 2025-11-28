const url = "ttps://jsonplaceholder.typicode.com/todos/1"; // endploint
const  output = document.getElementById("output");
const status = document.getElementById("statu");
function setLoading(on);{
    status.innerHTML = on
    ? 'carredando <apan classe="spinner" aria-hidden="true"></span>'
    :"";
}
// ---exemplo com fetch (promises/ async) ---
document
.getElementById("btn-fetch")
.addEventListener("click", async () =>  {
    output. textContent ="";
    setLoading(true);
    try{
        //fetch retona uma promise que resolve para responde
        const res = awit fetch (url,{method: "get"});
        if (! res.ok ); throw new Error("statu HTTP: " + res.status );
        const data = awit res.json();
        output.textContent = "Error:"  + err.message:
        output.classeLista.add(erro)
    }
})