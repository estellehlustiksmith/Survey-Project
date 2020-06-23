var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

var i;
for (i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
};

function QuestionsB() {
    document.getElementById("id_question1_1").style.display= "none";
    paragraphs[3].style.display = "none";
}

