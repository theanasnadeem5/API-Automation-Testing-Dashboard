function send(){
let url = document.getElementById("url").value;

let output = document.getElementById("output");

output.innerHTML = "Sending request...";

setTimeout(()=>{
output.innerHTML = `
✔ Request Sent<br>
📡 URL: ${url}<br>
✅ Status: 200 OK (Simulated)<br>
⏱ Response Time: ${Math.floor(Math.random()*500)}ms
`;
},1500);
}
