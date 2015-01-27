Pokedex.RootView.prototype.reassignToy = function (event) {
  event.preventDefault();
  var that = this;
  var oldPokeId = $(event.target).attr("data-pokemon-id");
  var toyId = $(event.target).attr("data-toy-id");
  var newPoke = this.pokes.find(function (item) {
    return item.get('name') === $(event.target).val();
  })
  var newPokeId = newPoke.get("id")
  var oldPoke = this.pokes.get(oldPokeId);
  var toy = oldPoke.toys().get(toyId);
  toy.save({pokemon_id: newPokeId}, {
    success: function(){
      oldPoke.toys().remove(toy);
      that.renderToysList(oldPoke.toys());
      that.$toyDetail.html("")
    }
  })
};

Pokedex.RootView.prototype.renderToysList = function(toys) {
  $(this.$pokeDetail.find(".toys")).html("");
  for(var i = 0; i < toys.length; i++) {
    this.addToyToList(toys.models[i]);
  }
}
