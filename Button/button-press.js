document.getElementById("btn").addEventListener("click", function() {
    const num = Math.floor(Math.random() * 10000) + 1;
    document.getElementById("output").textContent = num;
});