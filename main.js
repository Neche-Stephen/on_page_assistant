// const gas_pedal = document.getElementById('gas_pedal');
// const brake_pedal = document.getElementById('brake_pedal');
// const steering = document.getElementById('steering');
// let selected;

// Initial text for the moving div
let divText = 'Initial Text';



// Function to move the div to the position of the clicked button
// function moveDivTo(button) {
//     console.log('calling');
//     // if(button == 'steering'){
//     //     selected = steering;
//     // }
//     // else if(button == 'gas_pedal'){
//     //     selected = gas_pedal;
//     // }
//     // else if(button == 'brake_pedal'){
//     //     selected = brake_pedal;
//     // }
//     const movingDiv = document.getElementById('movingDiv');

//     // Get the position of the button relative to the viewport
//     const buttonRect = button.getBoundingClientRect();

//     // Set the position of the div to match the button's position
//     movingDiv.style.left = buttonRect.left + 'px';
//     movingDiv.style.top = buttonRect.top + 'px';
// }

// function moveDivTo(button) {
//     const movingDiv = document.getElementById('movingDiv');
//     const buttonRect = button.getBoundingClientRect();
//     const divRect = movingDiv.getBoundingClientRect();
//     const duration = 500; // Animation duration in milliseconds
//     const frames = 60; // Number of animation frames
//     const stepX = (buttonRect.left - divRect.left) / frames;
//     const stepY = (buttonRect.top - divRect.top) / frames;
//     let frame = 0;

//     function animate() {
//         if (frame < frames) {
//             movingDiv.style.left = (divRect.left + stepX * frame) + 'px';
//             movingDiv.style.top = (divRect.top + stepY * frame) + 'px';
//             frame++;
//             requestAnimationFrame(animate);
//         }
//     }

//     animate();
// }

// Function to move the div to the position of the clicked button and change the text
function moveDivTo(button, newText) {
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
 // Reset the text content to the initial text
 console.log('kk')


    const movingDiv = document.getElementById('movingDiv');
    movingDiv.style.left = '0px';
    movingDiv.style.top = '30%';
    const paragraph = movingDiv.querySelector('p');
    // const paragraph = document.getElementById('desc')
    // console.log(paragraph)
    paragraph.textContent = "Learn how to drive. I will be your guide";

   
}
