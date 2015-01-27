Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var that = this;
  var pokemon = new Pokedex.Models.Pokemon(attrs);

  pokemon.save({}, {
    success: function(){

      that.pokes.push(pokemon);
      that.addPokemonToList(pokemon);
      callback(pokemon);
    }
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var pokemonAttrs = $(event.target).serializeJSON();
  this.createPokemon(pokemonAttrs, this.renderPokemonDetail.bind(this));
};
