const submit_btn = document.getElementById("submit-btn");
const list = document.getElementById("list");
const clear_all_btn = document.getElementById("clear-all-btn");
const text_input = document.getElementById("text-input");
const mode_btn = document.getElementById("mode-btn");
const body = document.querySelector("body");
const title = document.getElementById("title");
let dark_mode =  true

text_input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit_btn.click();
    }
});


submit_btn.addEventListener("click", function(){
    list.innerHTML += `<li>${text_input.value}</li>`;
    text_input.value = "";
});

clear_all_btn.addEventListener("click", function(){
    list.innerHTML = "";
});

mode_btn.addEventListener("click",function(){
    if(dark_mode){
        body.style.backgroundColor = "lightblue";
        list.style.color = "black";
        mode_btn.textContent = "dark mode";
        title.style.color = "black";
        text_input.style.backgroundColor = "white";
        dark_mode = false;
    }else{
        body.style.backgroundColor = "black";
        list.style.color = "lightblue";
        mode_btn.textContent = "light mode";
        title.style.color = "gray";
        text_input.style.backgroundColor = "gray";
        dark_mode = true
    }
    
});
