"use strict"

const classificationImageButton = document.querySelector('input[type="file"]');
console.log(classificationImageButton);

classificationImageButton.addEventListener('change', function(){
    if(this.files && this.files[0]) {
        const fileName = this.files[0]['name'].toLowerCase();
        if(fileName.includes('.jpg') || fileName.includes('.png') || fileName.includes('.jpeg')){
            var img = document.querySelector('#myImg');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
    
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url

            classify();
        }
    }
})

function classify() {
    const formData = new FormData();
    formData.append("image", classificationImageButton.files[0]);

    const classificationRequest = new XMLHttpRequest();
    classificationRequest.open("POST", "https://54.237.55.50:5000/classify")
    //classificationRequest.open("GET", "http://google.com.tr");
    console.log(classificationRequest.send(formData)); 
}