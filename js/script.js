document.addEventListener("DOMContentLoaded", function() {
	const images = document.querySelectorAll('.portfolio-image');
	images.forEach((img, index) => {
		img.style.display = index === 0 ? 'block' : 'none';
});

	let currentIndex = 0;

	function changeImage() {
			// Hide the current image
			images[currentIndex].style.display = 'none';
			// Move to the next image, looping back to the first after the last
			currentIndex = (currentIndex + 1) % images.length;
			// Show the next image
			images[currentIndex].style.display = 'block';
	}

	const container = document.querySelector('.image-container');
	container.addEventListener('mouseover', () => {
			// Start changing images on hover
			this.interval = setInterval(changeImage, 900); // Adjust time as needed
	});

	container.addEventListener('mouseout', () => {
			// Stop changing images on mouse out
			clearInterval(this.interval);
	});
});
