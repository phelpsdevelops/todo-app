document.querySelector("button").addEventListener('click',retrieve)
function retrieve(){
   let task= document.querySelector('#enterText').value;
   document.querySelector('ol').innerHTML += `<li> ${task}</li>`
}
