document.addEventListener('DOMContentLoaded', function() {
    // Function to apply scaling effect to an image and its corresponding SVG
    const applyScalingToImageAndSVG = (imgId, svgId, scaleFactor) => {
        const img = document.getElementById(imgId);
        const svgElement = document.getElementById(svgId);

        if (img) {
            img.addEventListener('mouseenter', function() {
                img.style.transform = `scale(${scaleFactor})`;
                img.style.transition = 'transform 0.3s ease';
                img.style.transformOrigin = 'center center';
                // Ensure the image can scale without being clipped
                img.style.position = 'relative';
                img.style.zIndex = '10';

                if (svgElement) {
                    svgElement.style.fill = 'white';
                    svgElement.style.strokeWidth = '2px';
                }
            });

            img.addEventListener('mouseleave', function() {
                img.style.transform = 'scale(1)';
                img.style.zIndex = '1';

                if (svgElement) {
                    svgElement.style.fill = 'none';
                    svgElement.style.strokeWidth = '1px';
                }
            });
        }
    };

    // Apply the effect to each image and SVG
    const scaleFactor = 2; // Uniform scale factor for all images
    applyScalingToImageAndSVG("img8", "VLM1", scaleFactor);
    applyScalingToImageAndSVG("img9", "VLM2", scaleFactor);
    applyScalingToImageAndSVG("img7", "VLM3", scaleFactor);
    applyScalingToImageAndSVG("img10", "VLM4", scaleFactor);
    applyScalingToImageAndSVG("img14", "VLM4", scaleFactor);
    applyScalingToImageAndSVG("img17", "VLM4", scaleFactor);
    applyScalingToImageAndSVG("img1", "VMM1", scaleFactor);
    applyScalingToImageAndSVG("img15", "VMM2", scaleFactor);
    applyScalingToImageAndSVG("img2", "VMM2", scaleFactor);
    applyScalingToImageAndSVG("img4", "VMM2", scaleFactor);
    applyScalingToImageAndSVG("img12", "VMM2", scaleFactor);
    applyScalingToImageAndSVG("img3", "VMM3", scaleFactor);
    applyScalingToImageAndSVG("img11", "VMM4", scaleFactor);
    applyScalingToImageAndSVG("img20", "VMM4", scaleFactor);
    applyScalingToImageAndSVG("img13", "VMM5", scaleFactor);
    applyScalingToImageAndSVG("img5", "VMM6", scaleFactor);
    applyScalingToImageAndSVG("img18", "VMM6", scaleFactor);
    applyScalingToImageAndSVG("img19", "VMM7", scaleFactor);
    applyScalingToImageAndSVG("img16", "VM1", scaleFactor);
    applyScalingToImageAndSVG("img6", "VM2", scaleFactor);
    // Add more calls to applyScalingToImageAndSVG as needed for additional images and SVGs
});



document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 20; i++) {
        // Dynamically construct the image ID and target URL
        let imgId = 'img' + i;
        let targetUrl = 'id' + i + 'mp.html';

        // Get the image by ID
        let img = document.getElementById(imgId);
        if (img) {
            img.style.cursor = 'pointer'; 
            img.addEventListener('click', function() {
                window.location.href = targetUrl;
            });
        }
    }
});


document.getElementById('lamp-emoji').addEventListener('click', function() {
    var message = document.getElementById('disclaimer-message');
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});



