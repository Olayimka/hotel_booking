const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});



// Add event listener to all "Remove" buttons
const removeSectionButtons = document.querySelectorAll('.remove-section');
removeSectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Get the parent card element and remove it
        const card = button.closest('.card');
        if (card) {
            card.remove();
        }
    });
});


// Initialize room counts and total amounts for each column


// Function to update a specific column
function updateColumn(columnIndex) {
    const roomCountElement = roomCountElements[columnIndex - 1];
    const totalAmountElement = totalAmountElements[columnIndex - 1];
    roomCountElement.textContent = roomCounts[columnIndex - 1];
    totalAmountElement.textContent = "N" + totalAmounts[columnIndex - 1];
}





let totalPrice = 25000;

function updateTotal() {
    document.getElementById("totalPrice").textContent = "N" * totalPrice;
}

function decreaseTotal() {
    totalPrice -= 1;
    updateTotal();
}

function increaseTotal() {
    totalPrice += 1;
    updateTotal();
}


const cartCountElement = document.getElementById('cart-count');

// Initialize the cart count
let cartCount = 0;

// Add event listener to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
button.addEventListener('click', () => {
    // Increment the cart count
    cartCount++;
    
    // Update the cart count element
    cartCountElement.textContent = cartCount;

    // Add animation classes
    cartCountElement.classList.add('animate__animated', 'animate__bounce');

    // Remove animation classes after the animation ends
    cartCountElement.addEventListener('animationend', () => {
        cartCountElement.classList.remove('animate__animated', 'animate__bounce');
    });
});
});

// Function to display an image in the first row column
function displayImage(imageSrc) {
    var displayedImage = document.getElementById('displayedImage');
    displayedImage.src = imageSrc;
}
function displayImages(imageSrc) {
    var displayedImages = document.getElementById('displayedImages');
    displayedImages.src = imageSrc;
}
function displayImg(imageSrc) {
    var displayedImg = document.getElementById('displayedImg');
    displayedImg.src = imageSrc;
}
function displayImgs(imageSrc) {
    var displayedImgs = document.getElementById('displayedImgs');
    displayedImgs.src = imageSrc;
}



// Initialize room counts and total amounts for each column
let roomCounts = [0, 0, 0, 0];
let totalAmounts = [0, 0, 0, 0];

// Get references to HTML elements
const roomCountElements = document.querySelectorAll("[id^='roomCount']");
const totalAmountElements = document.querySelectorAll("[id^='totalAmount']");

// Get references to the +/- buttons for each column
for (let i = 1; i <= 4; i++) {
    const decreaseButton = document.getElementById(`decreaseRooms${i}`);
    const increaseButton = document.getElementById(`increaseRooms${i}`);

    decreaseButton.addEventListener("click", function () {
        if (roomCounts[i - 1] > 0) {
            roomCounts[i - 1]--;
            totalAmounts[i - 1] -= 25000;
            updateColumn(i);
        }
    });

    increaseButton.addEventListener("click", function () {
        roomCounts[i - 1]++;
        totalAmounts[i - 1] += 25000;
        updateColumn(i);
    });
}

// Function to update a specific column
function updateColumn(columnIndex) {
    const roomCountElement = roomCountElements[columnIndex - 1];
    const totalAmountElement = totalAmountElements[columnIndex - 1];
    roomCountElement.textContent = roomCounts[columnIndex - 1];
    totalAmountElement.textContent = "N" + totalAmounts[columnIndex - 1];
}



