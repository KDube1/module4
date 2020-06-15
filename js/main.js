$(document).ready(function(){

$("#bookingContainer").addClass('d-none');
$("#haircutView").addClass('d-none');
$("#makeBooking").addClass('d-none');
$("#dyeView").addClass('d-none');


    $(document).on('change', 'input:radio[id="sHaircut"]', function (event) {
        //console.log($('input[name="showHaircut"]:checked').val());
        $("#dyeView").addClass('d-none');
        $("#haircutView").removeClass('d-none');
        $("#infoHere").html('');
        $("#makeBooking").addClass('d-none');


    });

    $(document).on('change', 'input:radio[id="dHaircut"]', function (event) {

        console.log($('input[name="showDye"]:checked').val());
        $("#haircutView").addClass('d-none');
        $("#dyeView").removeClass('d-none');
        $("#infoHere").html('');
        $("#makeBooking").addClass('d-none');

    });

    $(document).on('change', 'input:radio[id="num1"]', function (event) {

        $("#infoHere").html('<p>$25</p><img src="https://i.imgur.com/8zxCuPZ.png" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="num2"]', function (event) {

        $("#infoHere").html('<p>$23</p><img src="https://i.imgur.com/kQjcJxw.png" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="num3"]', function (event) {

        $("#infoHere").html('<p>$27</p><img src="https://i.imgur.com/2gQB16K.png" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="blackColor"]', function (event) {

        $("#infoHere").html('<p>$30</p><img src="https://www.menshairstylestoday.com/wp-content/uploads/2018/03/Black-Men-Hairstyles.jpg" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="greyColor"]', function (event) {

        $("#infoHere").html('<p>$35</p><img src="https://menhairstylesworld.com/wp-content/uploads/2019/04/04.-crop.jpg" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="blonde"]', function (event) {

        $("#infoHere").html('<p>$25</p><img src="https://www.menshairstylestoday.com/wp-content/uploads/2016/03/Ash-Blonde-Hair-Men.jpg" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });




    $(document).ready(function() {
        $("#makeBooking").click(function(){
            $("#bookingContainer").removeClass('d-none');
        });
    });








});