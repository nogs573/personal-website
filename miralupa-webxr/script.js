let photoNumber = 0;
let video = document.querySelector('video')
navigator.mediaDevices.getUserMedia({video:true})

.then((stream) => {
    video.srcObject = stream

    return video.play();
})

.catch((error) => {
    console.error('Error accessing the camera:', error);
})

.then(() => {
    //button reference
    let button = document.getElementById("selfie-button")

    button.disabled = false;

    //onclick for the selfie button

    button.onclick = () => {
        // take selfie 

        takeSnapshot()
        .then(download)
    }
})

function takeSnapshot()
{
    // canvas element
    let canvas = document.createElement('canvas')

    let ctx = canvas.getContext('2d')

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    //save current context state
    ctx.save();

    //draw flipped version
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);    

    //restore context to original state
    ctx.restore();

    //convert canvas to blob
    return new Promise((res, rej) => {
        canvas.toBlob(res, "image/jpeg")
    })
}

function download(blob)
{
    // anchor tag
    let a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = "egoportrait-sureteqc-" + photoNumber + ".jpg"
    photoNumber += 1;
    document.body.appendChild(a)
    a.click()
}