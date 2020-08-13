console.log("Loading javascript...");

$(".carousel-indicators li").on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

async function fetchClassificationPredictions(file) {
    const UPLOAD_URL = 'https://api.lays.pro/predict';
    const payload = new FormData();
    payload.append("image", file);
    return fetch(UPLOAD_URL, {
        method: "POST",
        body: payload
    });
}

async function fetchSegmentationPredictions(file) {
    const UPLOAD_URL = 'https://api.lays.pro/predict/object-detection';
    const payload = new FormData();
    payload.append("image", file);
    return fetch(UPLOAD_URL, {
        method: "POST",
        body: payload
    });
}

$(function() {
    $("#classification_image_input_form").change(async function() {
        console.log("Classifying image...");
        $("#classification_loader").css("display","block");
        const file_data = $('#input_classification').prop('files')[0];
        response = await fetchClassificationPredictions(file_data);
        predictions = response.json();
        predictions.then((param) => {
            console.log("preds = ",param);
            $("#prediction_result_container").show("slow");
            $("#prediction_text").text("Your image was classified as : " + param["predictions"][0]["label"] + " with a probability of " + param["predictions"][0]["probability"]);
            $("#classification_loader").css("display","none");
        })
    });

    $("#input_segmentation").change(async function() {
        console.log("Segmenting  image...");
        $("#segmentation_loader").css("display","block");
        const file_data = $('#input_segmentation').prop('files')[0];

        response = await fetchSegmentationPredictions(file_data);
        predictions = response.blob();
        predictions.then((segmentation_response) => {
            segmented_img = URL.createObjectURL(segmentation_response)
            $('#image_placeholder_segmentation_modal').attr('src', segmented_img);
            $("#segmentation_loader").css("display","none");
            $('#segmentation_modal').modal('show');
            var reader = new FileReader();
            reader.readAsDataURL(segmentation_response);
            reader.onloadend = function() {
                var base64data = reader.result;
                console.log(base64data);
            }

            //    TODO : check sweetalert
        })
    });

});

jQuery(function($){
    $(".rvs-container").rvslider();
});

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


$("#data-science-link").on('click', function () {
    var target_element = document.getElementById("skill-set");
    target_element.scrollIntoView();
    var button = document.getElementById("datascience-nav-button");
    button.click();
})

$("#data-engineering-link").on('click', function () {
    var target_element = document.getElementById("skill-set");
    target_element.scrollIntoView();
    var button = document.getElementById("dataengineering-nav-button");
    button.click();
})

$("#cloud-link").on('click', function () {
    var target_element = document.getElementById("skill-set");
    target_element.scrollIntoView();
    var button = document.getElementById("cloud-nav-button");
    button.click();
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            autoplay:true,
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:2,
                    nav:false
                }
            }
        }
    );
});