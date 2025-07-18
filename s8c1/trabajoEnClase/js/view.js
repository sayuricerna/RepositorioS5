class DogView {
  constructor() {
    this.gallery = document.getElementById('gallery');
  }
  displayDogs(images) {
    this.gallery.innerHTML = images.map(url => 
        `<img src="${url}" alt="mascota desde API">`)
        .join('');
  }
}
