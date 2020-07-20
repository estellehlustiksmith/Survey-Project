var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
//document.getElementsByTagName("textarea").maxLength= "4";
//var textarea = document.getElementsByTagName("textarea");
//console.log(textarea);

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
document.getElementById("drawing").style.display= "none";
document.getElementById("canvas_p").style.display= "none";
document.getElementById("building_img").style.display= "none";
document.getElementById("gallery_img").style.display= "none";
document.getElementById("sectionb2_btn").style.display= "none";
document.getElementById("sectionb3_btn").style.display= "none";
document.getElementById("sectionb4_btn").style.display= "none";
document.getElementById("sectionb5_btn").style.display= "none";
document.getElementById("canvas_p2").style.display= "none";
document.getElementById("error").style.display= "none";
document.getElementById("sectionb4_5_btn").style.display= "none";
document.getElementById("video").style.display= "none";
document.getElementById("max_length").style.display= "none";
document.getElementById("finish").style.display= "none";
document.getElementById("submit_p").style.display= "none";



//Section B1 This is hiding all the paragraphs which are 2 or greater. 
//Then bringing back all those which are 13 and greater.
//Then hide all the ones over 18
function SectionB1() {
    if ((((((document.getElementById("id_questionA_1_0").checked) 
    || (document.getElementById("id_questionA_1_1").checked)
    || (document.getElementById("id_questionA_1_2").checked)  
    || (document.getElementById("id_questionA_1_3").checked)  
    || (document.getElementById("id_questionA_1_4").checked))  
    && ((document.getElementById("id_questionA_2_0").checked)
    || (document.getElementById("id_questionA_2_1").checked)
    || (document.getElementById("id_questionA_2_2").checked)
    || (document.getElementById("id_questionA_2_3").checked)
    || (document.getElementById("id_questionA_2_4").checked))
    && ((document.getElementById("id_questionA_3_0").checked)
    || (document.getElementById("id_questionA_3_1").checked)
    || (document.getElementById("id_questionA_3_2").checked)
    || (document.getElementById("id_questionA_3_3").checked)
    || (document.getElementById("id_questionA_3_4").checked))
    && ((document.getElementById("id_questionA_4_0").checked)
    || (document.getElementById("id_questionA_4_1").checked)
    || (document.getElementById("id_questionA_4_2").checked)
    || (document.getElementById("id_questionA_4_3").checked)
    || (document.getElementById("id_questionA_4_4").checked))
    && ((document.getElementById("id_questionA_5_0").checked)
    || (document.getElementById("id_questionA_5_1").checked)
    || (document.getElementById("id_questionA_5_2").checked)
    || (document.getElementById("id_questionA_5_3").checked)
    || (document.getElementById("id_questionA_5_4").checked))))))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "none";
        var i;
        for (i=2; i <  paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        for (i=15; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "block";
        };
        for (i=20;  i < paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        document.getElementById("id_questionB1_1").style.display= "block";
        document.getElementById("gallery_img").style.display= "block";
        document.getElementById("sectionb2_btn").style.display= "block";
        document.getElementById("canvas").style.display= "none";
        document.getElementById("id_questionA_1").style.display= "none";
        document.getElementById("id_questionA_2").style.display= "none";
        document.getElementById("id_questionA_3").style.display= "none";
        document.getElementById("id_questionA_4").style.display= "none";
        document.getElementById("id_questionA_5").style.display= "none";
        document.getElementById("sectionb1_btn").style.display= "none";
        var j = 0;
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 30) {
                clearInterval(id);
                j = 0;
            } 
            else {
                width++;
                elem.style.width = width + "%";}
            }
        // paragraphs[3].style.display = "none";
    }
    }
    else{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.getElementById("error").style.display= "block";}
    }

function SectionB2() {
    document.getElementById("max_length").style.display= "none";
    document.getElementById("error").style.display= "none";
    if ((document.getElementById("id_questionB1_2").value.length > 2000 )
    || (document.getElementById("id_questionB1_3").value.length > 2000))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("max_length").style.display= "block";
    }
    else if ( 
    //(document.getElementById("id_questionB1_2").value.length != 0 ) &&
    (document.getElementById("id_questionB1_3").value.length != 0 )
    && ((document.getElementById("id_questionB1_1_0").checked)
    || (document.getElementById("id_questionB1_1_1").checked)
    || (document.getElementById("id_questionB1_1_2").checked)))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "none";
        var i;
        for (i=2; i <  paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        for (i=20; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "block";
        };
        for (i=21; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        document.getElementById("canvas_p").style.display= "block";
        document.getElementById("canvas").style.display= "block";
        document.getElementById("id_questionB1_1").style.display= "none";
        document.getElementById("gallery_img").style.display= "none";
        document.getElementById("change_background_btn").style.display= "block";
        document.getElementById("clear_btn").style.display= "block";
        document.getElementById("drawing").style.display= "block";
        document.getElementById("sectionb2_btn").style.display= "none";
        document.getElementById("sectionb3_btn").style.display= "block";
        var j = 0;
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 30) {
                clearInterval(id);
                j = 0;
            } 
            else {
                width++;
                elem.style.width = width + "%";}
            }
    }
    }
    else{
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "block";}
}

function SectionB3() {
    document.getElementById("max_length").style.display= "none";
    document.getElementById("error").style.display= "none";
    if (document.getElementById("id_questionB1_4").value.length > 2000 )
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("max_length").style.display= "block";
    }
    else if (document.getElementById("id_questionB1_4").value.length != 0 ) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "none";
        var i;
        for (i=2; i <  paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        for (i=21; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "block";
        };
        for (i=24; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        document.getElementById("canvas_p2").style.display= "block";
        document.getElementById("video").style.display= "block";
        document.getElementById("canvas_p").style.display= "none";
        document.getElementById("drawing").style.display= "block";
        document.getElementById("sectionb3_btn").style.display= "none";
        document.getElementById("sectionb4_btn").style.display= "block";
        var j = 0;
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 44) {
                clearInterval(id);
                j = 0;
            } 
            else {
                width++;
                elem.style.width = width + "%";}
            }
    }
    }
    else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "block";}
}

function SectionB4() {
    document.getElementById("max_length").style.display= "none";
    document.getElementById("error").style.display= "none";
    if ((document.getElementById("id_questionB1_5").value.length > 2000 )
    || (document.getElementById("id_questionB1_6").value.length > 2000 )
    || (document.getElementById("id_questionB1_7").value.length > 2000 ))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("max_length").style.display= "block";
    }
    else if ((document.getElementById("id_questionB1_5").value.length != 0)
    && (document.getElementById("id_questionB1_6").value.length != 0)
    && (document.getElementById("id_questionB1_7").value.length != 0))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "none";
        var i;
        for (i=2; i <  paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        for (i=24; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "block";
        };
        for (i=25; i < paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        document.getElementById("canvas").style.display= "none";
        document.getElementById("drawing").style.display= "none";
        document.getElementById("change_background_btn").style.display= "none";
        document.getElementById("clear_btn").style.display= "none";
        document.getElementById("sectionb4_btn").style.display= "none";
        document.getElementById("sectionb4_5_btn").style.display= "block";
        document.getElementById("building_img").style.display= "block";
        document.getElementById("video").style.display= "none";
        var j = 0;
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 58) {
                clearInterval(id);
                j = 0;
            } 
            else {
                width++;
                elem.style.width = width + "%";}
            }
        }
    }
    else{
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "block";}
}

function SectionB4_5(){
    document.getElementById("max_length").style.display= "none";
    document.getElementById("error").style.display= "none";
    if (document.getElementById("id_questionB1_8").value.length > 2000 )
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("max_length").style.display= "block";
    }
    else if (document.getElementById("id_questionB1_8").value.length != 0)
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "none";
        var i;
        for (i=2; i <  paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        document.getElementById("sectionb4_5_btn").style.display= "none";
        document.getElementById("sectionb5_btn").style.display= "block";
        document.getElementById("canvas").style.display= "block";
        document.getElementById("change_background_btn").style.display= "block";
        document.getElementById("drawing").style.display= "block";
        document.getElementById("clear_btn").style.display= "block";
        document.getElementById("canvas_p").style.display= "block";
        document.getElementById("building_img").style.display= "none";
        var j = 0;
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 72) {
                clearInterval(id);
                j = 0;
            } 
            else {
                width++;
                elem.style.width = width + "%";}
            }
    }
    }
    else{
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "block";}
}

function SectionB5() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.getElementById("error").style.display= "none";
    var i;
    for (i=2; i <  paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    };
    for (i=25; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    };
    document.getElementById("sectionb5_btn").style.display= "none";
    document.getElementById("finish").style.display= "block";
    document.getElementById("gallery_img").style.display= "none";
    document.getElementById("canvas").style.display= "none";
    document.getElementById("change_background_btn").style.display= "none";
    document.getElementById("clear_btn").style.display= "none";
    document.getElementById("drawing").style.display= "none";
    document.getElementById("canvas_p").style.display= "none";
    var j = 0;
    if (j == 0) {
        j = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 86) {
            clearInterval(id);
            j = 0;
        } 
        else {
            width++;
            elem.style.width = width + "%";}
        }
    }
}

function Finish(){
    document.getElementById("max_length").style.display= "none";
    document.getElementById("error").style.display= "none";
    if ((document.getElementById("id_questionB1_9").value.length > 2000 )
    || (document.getElementById("id_questionB1_10").value.length > 2000 )
    || (document.getElementById("id_questionB1_11").value.length > 2000 )
    || (document.getElementById("id_questionB1_12").value.length > 2000 ))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("max_length").style.display= "block";
    }
    else if ((document.getElementById("id_questionB1_9").value.length != 0)
    || (document.getElementById("id_questionB1_10").value.length != 0)
    || (document.getElementById("id_questionB1_11").value.length != 0))
    //|| (document.getElementById("id_questionB1_12").value.length != 0))
    {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "none";
        var i;
        for (i=2; i <  paragraphs.length; i++) {
            paragraphs[i].style.display = "none";
        };
        document.getElementById("finish").style.display= "none";
        document.getElementById("submit").style.display= "block";
        document.getElementById("submit_p").style.display= "block";
        var j = 0;
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                j = 0;
            } 
            else {
                width++;
                elem.style.width = width + "%";}
            }
    }
    }
    else{
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.getElementById("error").style.display= "block";}
}