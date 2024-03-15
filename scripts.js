function myFunction() {
    var x = document.getElementById("cons_div");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.scrollIntoView({ block: "start" });
    } else {
        x.style.display = "none";
    }
}


// pg 6 cherry blossom!!!
