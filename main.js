Webcam.set({
    width : 600,
    height : 650,
    image_format :'png',
    png_quality : 90
})
camera = document.getElementById("Webcam");
Webcam.attach('#Webcam');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capture_img" src = "'+data_uri+'">'
    })
}
console.log("ml5.version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8w1j6m-wt/model.json', modelLoaded);
function modelLoaded(){
    console.log("model is loaded!");
}