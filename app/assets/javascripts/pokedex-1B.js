Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  this.$pokeDetail.html("")
  this.$toyDetail.html("")
  var $details = $("<div></div>").addClass("detail");
  for (var prop in pokemon.attributes) {

    if(prop === "image_url"){
      var $item = $("<img></img>").attr("src", pokemon.attributes.image_url);
    } else{
      var $item = $("<li></li>").append(prop + ": " + pokemon.attributes[prop]);
    }
    $details.append($item);
  };
  var $toys = $("<ul></ul>").addClass("toys");
  $details.append($toys);
  var that = this;
  pokemon.fetch({
    success: function() {
      that.renderToysList(pokemon.toys());
    }
  })
  this.$pokeDetail.append($details);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.target).attr("id")
  this.renderPokemonDetail(this.pokes.get(id));
};
