async function searchImages() {
    const query = document.getElementById('query').value;
    const apiKey = '_GwI8lU1VvMoBG-KB3xi3TJ7dHx8jBdsDEIgYDerkpo'; // استبدال my_API_KEY بمفتاح API الخاص بي
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        document.getElementById('images').innerText = error.message;
    }
}

function displayImages(images) {
    const imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.description || 'Unsplash Image';
        imagesContainer.appendChild(imgElement);
    });
}
