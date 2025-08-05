const themebtn = document.getElementById("theme");
const followbtn = document.getElementById("followbtn");
const likebtn = document.getElementById("likebtn");
const likecount = document.getElementById("likeCount");
const details = document.getElementById("details");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");

let like = 0;
let detailsVisible = true;

// like button
likebtn.addEventListener("click", () => {
    likecount.innerHTML = like;
    like++;
});


// following button
followbtn.addEventListener ("click", () => {
    if(followbtn.textContent == "Follow"){
        followbtn.textContent = "Following";
        followbtn.classList.add("following");
    }
    else{
        followbtn.textContent = "Follow";
        followbtn.classList.remove("following");
    }
});

// hide & show button
toggleDetailsBtn.addEventListener("click", () => {
    detailsVisible = !detailsVisible;
    details.style.display = detailsVisible ? "block" : "none";
    toggleDetailsBtn.textContent = detailsVisible ? "Hide Details" : "Show Details";
});


// theme change button
themebtn.addEventListener ("click",() => {
    document.body.classList.toggle("dark");
    theme.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
    
});
