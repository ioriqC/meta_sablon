
function changeStyle(id){
    
    name = document.getElementById("span1").innerText;
    name1 = document.getElementById("span2").innerText;

    if(id == "one1"){
        document.getElementById("span1").style.color = "#36c1ba";
        document.getElementById("add-btn").innerText = name;
        document.getElementById("span-img1").src = "./img/check.png"
        document.getElementById("span-img2").src = "./img/square.png";
        document.getElementById("span2").style.color = "#121920";
    } else{
        if(id == "one2"){
            document.getElementById("span2").style.color = "#36c1ba";
            document.getElementById("add-btn").innerText = name1;
            document.getElementById("span1").style.color = "#121920";
            document.getElementById("span-img2").src = "./img/check.png";
            document.getElementById("span-img1").src = "./img/square.png"
        }
    }
  
}


function changeTable(id){
   
    if(id == "food-inner-two"){
        document.getElementById("macronutreins").style.display = "none";
        document.getElementById("minerals").style.display = "none";
        document.getElementById("vitamins").style.display = "flex";

        document.getElementById("food-inner-one").style.color = "#121920";
        document.getElementById("hr-one").style.backgroundColor = "#121920";
        document.getElementById("hr-one").style.width = "30px";

        document.getElementById("food-inner-three").style.color = "#121920";
        document.getElementById("hr-three").style.backgroundColor = "#121920";
        document.getElementById("hr-three").style.width = "30px";

        document.getElementById("food-inner-two").style.color = "#36c1ba";
        document.getElementById("hr-two").style.backgroundColor = "#36c1ba";
        document.getElementById("hr-two").style.width = "70px";

    } else 
    if(id == "food-inner-three"){
        document.getElementById("macronutreins").style.display = "none";
        document.getElementById("vitamins").style.display = "none";
        document.getElementById("minerals").style.display = "flex";

        document.getElementById("food-inner-two").style.color = "#121920";
        document.getElementById("hr-two").style.backgroundColor = "#121920";
        document.getElementById("hr-two").style.width = "30px";

        document.getElementById("food-inner-three").style.color = "#36c1ba";
        document.getElementById("hr-three").style.backgroundColor = "#36c1ba";
        document.getElementById("hr-three").style.width = "70px";

    } else{
        document.getElementById("macronutreins").style.display = "flex";
        document.getElementById("vitamins").style.display = "none";
        document.getElementById("minerals").style.display = "none";

        document.getElementById("food-inner-two").style.color = "#121920";
        document.getElementById("hr-two").style.backgroundColor = "#121920";
        document.getElementById("hr-two").style.width = "30px";

        document.getElementById("food-inner-three").style.color = "#121920";
        document.getElementById("hr-three").style.backgroundColor = "#121920";
        document.getElementById("hr-three").style.width = "30px";

        document.getElementById("food-inner-one").style.color = "#36c1ba";
        document.getElementById("hr-one").style.backgroundColor = "#36c1ba";
        document.getElementById("hr-one").style.width = "70px";


    }

}


if (localStorage.getItem('cookieSeen') != 'bannerShown') {
    $('.cookie-banner').delay(2000).fadeIn();
  }
  $('.close').click(function() {
    localStorage.setItem('cookieSeen','bannerShown')
    $('.cookie-banner').fadeOut();
  });


