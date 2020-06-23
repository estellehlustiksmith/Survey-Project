var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//Section A. This is hiding all paragraphs which are 13 or greater
var i;
for (i=13; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
};
document.getElementById("id_questionB1_6").style.display= "none";
document.getElementById("canvas").style.display= "none";
document.getElementById("change_background_btn").style.display= "none";
document.getElementById("clear_btn").style.display= "none";
document.getElementById("submit").style.display= "none";

//Section C
function SectionC() {
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=13; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    document.getElementById("id_questionB1_6").style.display= "block";
    document.getElementById("canvas").style.display= "block";
    document.getElementById("id_questionA_1").style.display= "none";
    document.getElementById("id_questionA_2").style.display= "none";
    document.getElementById("id_questionA_3").style.display= "none";
    document.getElementById("id_questionA_4").style.display= "none";
    document.getElementById("id_questionA_5").style.display= "none";
   // paragraphs[3].style.display = "none";
}

