const express = require('express');
const app = express();


const pets = [
  { name: 'Cooper', owner: 'Maayan', Id: 1 },
  { name: 'Tucker', owner: 'Jim', Id: 2 },
  { name: 'Nibbler', owner: 'Adi', Id: 3 },
  { name: 'Chloe', owner: 'Tatiana', Id: 4 },
]

app.get('/api/v1/pets', (req, res) => {
  res.send(pets);

});




app.get('/api/v1/pets/owner', (req, res) => {
  let ownerSearch = pets;

  if (req.query.owner) {
    ownerSearch = pets.filter((lilHomie) => {
      return lilHomie.owner === req.query.owner
    });
    res.send(ownerSearch)
  };
})


app.get('/api/v1/pets/:petName', (req, res) => {
  const { petName } = req.params;

  const singlePet = pets.find((lilHomie) => {
    return lilHomie.name === petName
  })
  res.send(singlePet);
});



app.listen(3000, () => {
  console.log(pets)
});