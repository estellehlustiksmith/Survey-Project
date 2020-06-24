var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//Section A. This is hiding all paragraphs which are 13 or greater
var i;
for (i=15; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
};
document.getElementById("id_questionB1_1").style.display= "none";
document.getElementById("canvas").style.display= "none";
document.getElementById("change_background_btn").style.display= "none";
document.getElementById("clear_btn").style.display= "none";
document.getElementById("submit").style.display= "none";
document.getElementById("canvas_p").style.display= "none";
document.getElementById("building_img").style.display= "none";
document.getElementById("sectionb2_btn").style.display= "none";
document.getElementById("sectionb3_btn").style.display= "none";
document.getElementById("sectionb4_btn").style.display= "none";
document.getElementById("sectionb5_btn").style.display= "none";
document.getElementById("canvas_p2").style.display= "none";

//Section B1 This is hiding all the paragraphs which are 2 or greater. 
//Then bringing back all those which are 13 and greater.
//Then hide all the ones over 18
function SectionB1() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=15; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    for (i=18;  i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    document.getElementById("id_questionB1_1").style.display= "block";
    document.getElementById("building_img").style.display= "block";
    document.getElementById("sectionb2_btn").style.display= "block";
    document.getElementById("canvas").style.display= "none";
    document.getElementById("id_questionA_1").style.display= "none";
    document.getElementById("id_questionA_2").style.display= "none";
    document.getElementById("id_questionA_3").style.display= "none";
    document.getElementById("id_questionA_4").style.display= "none";
    document.getElementById("id_questionA_5").style.display= "none";
    document.getElementById("sectionb1_btn").style.display= "none";
   // paragraphs[3].style.display = "none";
}

function SectionB2() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=18; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    for (i=19; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    document.getElementById("canvas_p").style.display= "block";
    document.getElementById("canvas").style.display= "block";
    document.getElementById("id_questionB1_1").style.display= "none";
    document.getElementById("building_img").style.display= "none";
    document.getElementById("change_background_btn").style.display= "block";
    document.getElementById("clear_btn").style.display= "block";
    document.getElementById("sectionb2_btn").style.display= "none";
    document.getElementById("sectionb3_btn").style.display= "block";
}

function SectionB3() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=19; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    for (i=23; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    document.getElementById("canvas_p2").style.display= "block";
    document.getElementById("canvas_p").style.display= "none";
    document.getElementById("sectionb3_btn").style.display= "none";
    document.getElementById("sectionb4_btn").style.display= "block";
}

function SectionB4() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=23; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    for (i=24; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    document.getElementById("canvas").style.display= "none";
    document.getElementById("sectionb4_btn").style.display= "none";
    document.getElementById("sectionb5_btn").style.display= "block";
}

function SectionB5() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=24; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    document.getElementById("sectionb5_btn").style.display= "none";
    document.getElementById("submit").style.display= "block";
    document.getElementById("change_background_btn").style.display= "none";
    document.getElementById("clear_btn").style.display= "none";
}