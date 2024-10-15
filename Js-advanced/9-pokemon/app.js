"use stirct";

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
  const { abilities } = JSON.parse(this.responseText);
  const requestAbility = new XMLHttpRequest();
  requestAbility.open("GET", abilities[0].ability.url);
  requestAbility.send();

  requestAbility.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data.effect_entries[1].effect);
  });
});
