const model = new DogModel();
const view = new DogView();

document.getElementById('loadBtn').addEventListener('click', async () => {
  const count = parseInt(document.getElementById('dogCount').value) || 6;
  const dogs = await model.fetchDogs(count);
  view.displayDogs(dogs);
});

