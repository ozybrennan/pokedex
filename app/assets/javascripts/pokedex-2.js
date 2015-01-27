Pokedex.RootView.prototype.addToyToList = function (toy) {
  var pokeId = toy.attributes.pokemon_id
  var toyId = toy.id
  var $li = $("<li></li>").text("name: " + toy.attributes.name + "\nhappiness: " +
    toy.attributes.happiness + "\nprice: " + toy.attributes.price);
  $li.attr("toy-id", toyId).attr("pokemon-id", pokeId)
  this.$pokeDetail.append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  this.$toyDetail.html("");
  var pokeId = toy.get("pokemon_id");
  // debugger
  var toyId = toy.id;
  var $details = $("<div></div>").addClass("detail");
  for (var prop in toy.attributes) {

    if(prop === "image_url"){
      var $item = $("<img></img>").attr("src", toy.attributes.image_url);
    } else{
      var $item = $("<li></li>").append(prop + ": " + toy.attributes[prop]);
    }
    $details.append($item);
  };
  var $select = $("<select></select>");
  $select.attr("data-pokemon-id", pokeId);
  $select.attr("data-toy-id", toyId);
  for (var i = 1; i <= this.pokes.length; i++) {
    var $option = $("<option></option>").data("value", i);
    $option.text(this.pokes.get(i).attributes.name);
    if (i === pokeId) {
      $option.attr("selected", "selected");
    }
    $select.append($option);
  }
  $select.on("change", this.reassignToy.bind(this))
  $details.append($select);
  this.$toyDetail.append($details);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var toyId = $(event.target).attr("toy-id");
  var pokeId = $(event.target).attr("pokemon-id");
  this.renderToyDetail(this.pokes.get(pokeId).toys().get(toyId));
};
