endLoading();

async function fetchClassificationPredictions(file) {
    const UPLOAD_URL = 'https://api.lays.pro/predict';
    const payload = new FormData();
    payload.append("image", file);
    return fetch(UPLOAD_URL, {
        method: "POST",
        body: payload
    });
}

async function fetchSegmentationPredictionsFromFile(file) {
    const UPLOAD_URL = 'https://api.lays.pro/predict/object-detection';
    const payload = new FormData();
    payload.append("image", file);
    return fetch(UPLOAD_URL, {
        method: "POST",
        body: payload
    });
}

async function fetchSegmentationPredictionsFromUrl(imageUrl) {
    console.log("Fetching inference results...");
    startLoading()
    $("#image_placeholder_segmentation").attr('src', imageUrl);
    let blob = await fetch(imageUrl).then(r => r.blob());
    const file = new File([blob], "imagename.png");
    const response = await fetchSegmentationPredictionsFromFile(file);
    response.blob().then((segmentation_response) => {
        segmented_img = URL.createObjectURL(segmentation_response)
        endLoading();
        showSegmentationModal(segmented_img);
    })
}

function showSegmentationModal(objectUrl) {
    console.log("Showing modal with segmentation results...");
    $('#image_placeholder_segmentation_modal').attr('src', objectUrl);
    $('#segmentation_modal').modal('show');
    endLoading()
}

function startLoading() {
    console.log("Segmenting  image...");
    $("#segmentation_loader").css("opacity","1");
}

function endLoading() {
    $("#segmentation_loader").css("opacity","0");
}
