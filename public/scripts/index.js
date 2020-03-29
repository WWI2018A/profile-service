type="text/javascript">

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