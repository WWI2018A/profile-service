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
 



    document.getElementById("skill1").innerHTML = ` 
        <div class="skilllogo1">
            <i class="`+logo[0]+` logo" style="font-size: 30px; color: white"></i>
        </div>
        `
    
    document.getElementById("skill2").innerHTML = ` 
        <div class="skilllogo2">
            <i class="`+logo[1]+` logo" style="font-size: 30px; color: white"></i>
        </div>
        `
    
    document.getElementById("skill3").innerHTML = ` 
        <div class="skilllogo3">
            <i class="`+logo[2]+` logo" style="font-size: 30px; color: white"></i>
        </div>
        `
    
    document.getElementById("skill4").innerHTML = ` 
        <div class="skilllogo3">
            <i class="`+logo[3]+` logo" style="font-size: 30px; color: white"></i>
        </div>
        `

    
        document.getElementById("profilePictureLarge").src = data[0].profileImage;
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
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            $('#profilePictureLarge').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

    // Trigger image display on image-select.
$("#fileUpload").change(function(){

    readURL(this);
});



http.send()

