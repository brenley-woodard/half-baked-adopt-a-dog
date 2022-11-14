import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async () => {
    // get the id from URL
    const detail = new URLSearchParams(window.location.search);
    const id = detail.get('id');
    // use the id to fetch the dog
    const dog = await getDog(id);
    // render and append this dog's details to the container
});
