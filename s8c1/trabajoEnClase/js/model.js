class DogModel {
  async fetchDogs(count = 6) {
    // API PARA LA GALERIA DE PERROS 
    const res = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
    const data = await res.json();
    return data.message;
  }
}
