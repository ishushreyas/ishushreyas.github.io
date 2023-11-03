function changeCss () {
    var navElement = document.querySelector("#foot");
    var scrllText = document.querySelector("#scroll");
    var img3 = document.querySelector("#img3");
    var img5 = document.querySelector("#img5");
var secElement = document.querySelector("#box4");
var lstElement = document.querySelector("#box5");
    //scrllText.textContent = this.scrollY;
    this.scrollY > 800 && this.scrollY < 2250 ? navElement.style.display = 'block' : navElement.style.display = 'none';
    this.scrollY > img3.getBoundingClientRect().top ? img3.style.transform = 'translate(0px)' : img3.style.transform = 'translate(' + (this.scrollY - img3.getBoundingClientRect().top) +'px)';
this.scrollY > img3.getBoundingClientRect().top ? img3.style.opacity = '1' : img3.style.opacity = '0';
    this.scrollY > img5.getBoundingClientRect().top ? img5.style.transform = 'translate(0px)' : img5.style.transform = 'translate(' + (this.scrollY - img5.getBoundingClientRect().top + 100 ) +'px)';
this.scrollY > img5.getBoundingClientRect().top ? img5.style.opacity = '1' : img5.style.opacity = '0';
this.scrollY > secElement.getBoundingClientRect().top ? document.body.style.backgroundColor = '#7ee787' : console.log("Not in 3");
this.scrollY > lstElement.getBoundingClientRect().top ? document.body.style.backgroundColor = '#939aff' : console.log("Not in 5");
this.scrollY > document.querySelector("#box6").getBoundingClientRect().top ? document.body.style.backgroundColor = '#ffffff' : console.log("Not in up");
  }
  window.addEventListener("scroll", changeCss , false);
  
    document.getElementById("aws_card").addEventListener("mouseover", function(){
      document.getElementById("AWS").style.opacity = "1";
      document.getElementById("AWS").style.display = "flex";
    });
    document.getElementById("aws_card").addEventListener("mouseout", function(){
      document.getElementById("AWS").style.opacity = "0";
      document.getElementById("AWS").style.display = "none";
    });
  
    document.getElementById("AWS").addEventListener("mouseover", function(){
      document.getElementById("AWS").style.opacity = "1";
      document.getElementById("AWS").style.display = "block";
    });
    document.getElementById("AWS").addEventListener("mouseout", function(){
      document.getElementById("AWS").style.opacity = "0";
      document.getElementById("AWS").style.display = "none";
    });
  
    document.getElementById("azure_card").addEventListener("mouseover", function(){
      document.getElementById("Azure").style.opacity = "1";
      document.getElementById("Azure").style.display = "block";
    });
    document.getElementById("azure_card").addEventListener("mouseout", function(){
      document.getElementById("Azure").style.opacity = "0";
      document.getElementById("Azure").style.display = "none";
    });
  
    document.getElementById("Azure").addEventListener("mouseover", function(){
      document.getElementById("Azure").style.opacity = "1";
      document.getElementById("Azure").style.display = "block";
    });
    document.getElementById("Azure").addEventListener("mouseout", function(){
      document.getElementById("Azure").style.opacity = "0";
      document.getElementById("Azure").style.display = "none";
    });
  
    document.getElementById("gcp_card").addEventListener("mouseover", function(){
      document.getElementById("GCP").style.opacity = "1";
      document.getElementById("GCP").style.display = "block";
    });
    document.getElementById("gcp_card").addEventListener("mouseout", function(){
      document.getElementById("GCP").style.opacity = "0";
      document.getElementById("GCP").style.display = "none";
    });
  
    document.getElementById("GCP").addEventListener("mouseover", function(){
      document.getElementById("GCP").style.opacity = "1";
      document.getElementById("GCP").style.display = "block";
    });
    document.getElementById("GCP").addEventListener("mouseout", function(){
      document.getElementById("GCP").style.opacity = "0";
      document.getElementById("GCP").style.display = "none";
    });
  
