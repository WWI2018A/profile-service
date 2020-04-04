var http = new XMLHttpRequest();
var url = "/api/v1/profiles";
http.open("GET", url, true);


http.onreadystatechange = function () {     //Call a function when the state changes.
    if (http.readyState === 4 && http.status === 200) { 
    var data = JSON.parse(http.responseText)  
    var logo = [];

    function fill(){
    for(var i=0; i<data[0].skills.length; i++) {
        if(data[0].skills[i] == "html"){
            var newlogo = logo.push("fas fa-code")
        }
        else if(data[0].skills[i] == "javascript") {
            var newlogo = logo.push("fab fa-js")
        }
        else if(data[0].skills[i] == "java") {
            var newlogo = logo.push("fab fa-java")
        }
        else if(data[0].skills[i] == "python") {
            var newlogo = logo.push("fab fa-python")
        }
        else if(data[0].skills[i] == "c"){
            var newlogo = logo.push("fab fa-angular")
        }
        else if(data[0].skills[i] == "docker") {
            var newlogo = logo.push("fab fa-docker")
        }
        else if(data[0].skills[i] == "android") {
            var newlogo = logo.push("fab fa-android")
        }
        else if(data[0].skills[i] == "php") {
            var newlogo = logo.push("fab fa-php")
        }
        else if(data[0].skills[i] == "swift") {
            var newlogo = logo.push("fab fa-swift")
        }
        else {
            var newlogo = logo.push("fab fa-angular")
        }
    }
    
    if(data[0].skills[0] !== undefined){
        document.getElementById("skill1").innerHTML = ` 
        <div class="skilllogo1">
            <i class="`+logo[0]+` logo" style="font-size: 30px; color: white"></i>
            <p style="font-size: 1rem;">`+ data[0].skills[0]+`</p>
        </div>
        `
    } else{}
    if(data[0].skills[1] !== undefined){ 
        document.getElementById("skill2").innerHTML = ` 
        <div class="skilllogo1">
            <i class="`+logo[1]+` logo" style="font-size: 30px; color: white"></i>
            <p style="font-size: 1rem;">`+ data[0].skills[1]+`</p>
        </div>
        `
    } else {}
    if(data[0].skills[2] !== undefined){
        document.getElementById("skill3").innerHTML = ` 
        <div class="skilllogo1">
            <i class="`+logo[2]+` logo" style="font-size: 30px; color: white"></i>
            <p style="font-size: 1rem;">`+ data[0].skills[2]+`</p>
        </div>
        `
    } else{}
    if(data[0].skills[3] !== undefined){
        document.getElementById("skill4").innerHTML = ` 
        <div class="skilllogo2">
            <i class="`+logo[3]+` logo" style="font-size: 30px; color: white"></i>
            <p style="font-size: 1rem;">`+ data[0].skills[3] +`</p>
        </div>
        `
    }else{}


    var social =[]
    for(var i=0; i<data[0].socialnetworks.length; i++) {
        if(data[0].socialnetworks[i] == "snapchat"){
            var newsocial = social.push("fab fa-snapchat-ghost")
        } else if(data[0].socialnetworks[i] == "instagram") {
            var newsocial = social.push("fab fa-instagram")
        } else if(data[0].socialnetworks[i] == "facebook"){
            var newsocial = social.push("fab fa-facebook-square")
        }else if(data[0].socialnetworks[i] == "github"){
            var newsocial = social.push("fab fa-github")
        } else if(data[0].socialnetworks[i] == "linkedin"){
            var newsocial = social.push("fab fa-linkedin")
        }else {
            var newsocial = social.push("fab fa-twitter")
        }

    }

    for(var i=0; i < social.length; i++){
    document.getElementById("displaysocialnetworks").innerHTML += ` 
        <i class="`+social[i]+`" style="font-size: 20px; color: black; margin: 0 auto;"> </i>
    `
    }

    document.getElementById("displayname").innerHTML = ` 
        <p style="font-size: 3rem; margin: 0 auto;">`+ data[0].prename + ` ` + data[0].name+`</p>
    `
    document.getElementById("displaydescription").innerHTML = ` 
        <p style="font-size: 1rem; font-weight: bold;">Beschreibung:</p>
        <p style="font-size: 1rem;">`+ data[0].description +`</p>
    `
    document.getElementById("displayrole").innerHTML = ` 
        <p style="font-size: 1rem; font-weight: bold;">Rollen:</p>
        <p style="font-size: 1rem;">`+ data[0].roles +`</p>
    `
    document.getElementById("displaycompany").innerHTML = ` 
        <p style="font-size: 1rem; font-weight: bold;">Firma:</p>
        <p style="font-size: 1rem;">`+ data[0].company +`</p>
    `
    document.getElementById("displayos").innerHTML = ` 
        <p style="font-size: 1rem; font-weight: bold;">Betriebssystem:</p>
        <p style="font-size: 1rem;">`+ data[0].os +`</p>
    `

        document.getElementById("profilePictureLarge").src = data[0].profileImage;
        document.getElementById("profilePictureSmall").src = data[0].profileImage;
        document.getElementById("name").value = data[0].name
        document.getElementById("pname").value = data[0].prename
        document.getElementById("roles").value = data[0].roles
        document.getElementById("description").value = data[0].description
        document.getElementById("user_id").value = data[0].user_id
    
    }
    fill();
    }
    
}


// Display the selected image.
/*function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            $('#profilePictureLarge').attr('src', e.target.result);
            $('#profilePictureSmall').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}*/

    // Trigger image display on image-select.
$("#fileUpload").change(function(){
        if (this.files && this.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
    
                $('#profilePictureLarge').attr('src', e.target.result);
                $('#profilePictureSmall').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    
    //readURL(this);
});

$("#fileUpload2").change(function(){
    if (this.files && this.files[0]) {
        var reader2 = new FileReader();

        reader2.onload = function (e) {

            $('#profileWallpaper').attr('src', e.target.result);
            $('#profileWallpaperSmall').attr('src', e.target.result);
        }
        reader2.readAsDataURL(this.files[0]);
    }

//readURL(this);
});


http.send()

