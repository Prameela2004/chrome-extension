// Create and insert the "Connect with All" button
const connectButton = document.createElement('button');
connectButton.innerText = 'Connect with All';
connectButton.style.position = 'fixed';
connectButton.style.bottom = '20px';
connectButton.style.right = '20px';
connectButton.style.zIndex = '10000'; // Make sure it's above other elements
connectButton.style.padding = '10px 20px';
connectButton.style.backgroundColor = '#0077b5'; // LinkedIn color
connectButton.style.color = 'white';
connectButton.style.border = 'none';
connectButton.style.borderRadius = '5px';
connectButton.style.cursor = 'pointer';

// Append the button to the body
document.body.appendChild(connectButton);

// Add an event listener for the button click
connectButton.addEventListener('click', () => {
    console.log('Button clicked, sending START_CONNECTING message.');
    window.postMessage({ type: 'START_CONNECTING' }, '*');
});

// Listen for the START_CONNECTING message
window.addEventListener('message', (event) => {
    if (event.data.type === 'START_CONNECTING') {
        console.log("Received START_CONNECTING message, starting connection process.");

        // Select all visible connect buttons
        const connectButtons = Array.from(document.querySelectorAll('button'))
            .filter(button => button.innerText.includes('Connect') && button.offsetParent !== null);

        console.log(`Found ${connectButtons.length} connect buttons.`);

        let connectIndex = 0;

        function clickNextButton() {
            if (connectIndex < connectButtons.length) {
                const button = connectButtons[connectIndex];
                if (button) {
                    console.log(`Clicking connect button ${connectIndex}`);
                    button.click();
                    connectIndex++;
                    setTimeout(clickNextButton, 1000 + Math.random() * 2000); // Delay between 1 to 3 seconds
                } else {
                    connectIndex++;
                    clickNextButton();
                }
            } else {
                console.log('Finished sending connection requests.');
            }
        }

        clickNextButton();
    }
});
