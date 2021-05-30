function goBack()
{
    window.location = "index.html";
}

function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("scoreGet").innerHTML = score;
}