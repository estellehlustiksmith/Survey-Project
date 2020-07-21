var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

document.getElementById("submit").style.display= "none";
document.getElementById("id_name").style.display= "none";
var i;
for (i=3; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
};

function Int1() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.getElementById("submit").style.display= "block";
    document.getElementById("int1_btn").style.display= "none";
    document.getElementById("id_name").style.display= "block";
    var i;
    for (i=3; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
}