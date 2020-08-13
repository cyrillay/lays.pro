function showSegmentationModal(objectUrl) {
    console.log("Showing modal with segmentation results...");
    $('#image_placeholder_segmentation_modal').attr('src', objectUrl);
    $('#segmentation_modal').modal('show');
    endLoading()
}

function startLoading() {
    console.log("Segmenting  image...");
    $("#segmentation_loader").css("display","block");
}

function endLoading() {
    $("#segmentation_loader").css("display","none");
}

async function preddd(imageUrl) {
    let blob = await fetch(imageUrl).then(r => r.blob());
    const file = new File([blob], "imagename.png");
    const response = await fetchSegmentationPredictions(file);
    response.blob().then((segmentation_response) => {
        segmented_img = URL.createObjectURL(segmentation_response)
        showSegmentationModal(segmented_img);
    })
}
