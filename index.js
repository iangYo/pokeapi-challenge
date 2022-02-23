const app = require('express')();
const { default: axios } = require('axios');

app.get('/:poke_name', async (req, res) => {
  const param = req.params.poke_name;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`);
    const pokeAbilities = response.data.abilities.map(item => item.ability.name);

    return res.json(pokeAbilities.sort());
  } catch (error) {
    return res.json(error.response.data)
  }
})

app.listen(3333);