Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $("<li></li>").text(pokemon.escape("name") + " " + pokemon.escape("poke_type"));
  $li.addClass("poke-list-item");
  $li.attr("id", pokemon.id);
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
  var that = this;
  this.pokes.fetch ({
    success: function() {
      for (var i = 1; i < that.pokes.length; i++) {
        that.addPokemonToList(that.pokes.get(i));
      }
    }
  })
};
