// Function to show the spinner
function showSpinner() {
    document.getElementById('loadingSpinner').style.display = 'inline-block';
}

// Function to hide the spinner
function hideSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Function to handle the model load event
function handleModelLoad() {
    hideSpinner(); // Hide the spinner when the model is loaded
}

// Attach the handleModelLoad function to the load event of the model-viewer
const modelViewer = document.querySelector('.main-model');
modelViewer.addEventListener('load', handleModelLoad);

// Show the spinner when the page loads (before the model is loaded)
window.addEventListener('load', showSpinner);

// Initial text for the moving div
let divText = '';

// Define the initial model source
let initialModelSource = 'model1/scene.gltf';


// Function to move the div to the position of the clicked button and change the text
function moveDivTo(button, newText, newSource) {
    const movingDiv = document.getElementById('movingDiv');
    const buttonRect = button.getBoundingClientRect();
    const divRect = movingDiv.getBoundingClientRect();
    const duration = 500; // Animation duration in milliseconds
    const frames = 60; // Number of animation frames
    const stepX = (buttonRect.left - divRect.left) / frames;
    const stepY = (buttonRect.top - divRect.top) / frames;
    let frame = 0;

    function animate() {
        if (frame < frames) {
            movingDiv.style.left = (divRect.left + stepX * frame) + 'px';
            movingDiv.style.top = (divRect.top + stepY * frame) + 'px';
            frame++;
            requestAnimationFrame(animate);
        }
        // Update the text in the moving div
        movingDiv.querySelector('p').textContent = newText;
    }

    animate();
    const modelViewer = document.querySelector('.main-model');
    modelViewer.setAttribute('src', newSource);
    // Update the global divText variable
    divText = newText;
}

// Function to reset the div to its initial position and text
// function resetDiv() {
//     const movingDiv = document.getElementById('movingDiv');
//     movingDiv.style.left = '0px';
//     movingDiv.style.top = '30%';
//     movingDiv.querySelector('p').textContent = divText; // Restore the initial text
// }

// Function to reset the div to its initial position and text
function resetDiv() {
 // Reset the text conconst modelViewer = document.querySelector('.main-model');
    modelViewer.setAttribute('src', initialModelSource);


    const movingDiv = document.getElementById('movingDiv');
    movingDiv.style.left = '0px';
    movingDiv.style.top = '30%';
    const paragraph = movingDiv.querySelector('p');
    // const paragraph = document.getElementById('desc')
    // console.log(paragraph)
    paragraph.textContent = "Learn how to drive. I will be your guide. Click any button to learn";

   
}
