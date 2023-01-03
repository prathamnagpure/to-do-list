const submit_btn = document.getElementById("submit-btn");
const list = document.getElementById("list");
const clear_all_btn = document.getElementById("clear-all-btn");
const text_input = document.getElementById("text-input");


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


