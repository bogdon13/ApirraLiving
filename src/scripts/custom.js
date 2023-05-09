$(document).ready(function () {
  var userFeed = new Instafeed({
    get: "user",
    userId: 799733552,
    limit: 12,
    resolution: "standard_resolution",
    accessToken:
      "IGQVJXckdsODFvckt6ZAjMwLUJ1dmM1ekx4cmIzXzVieFVGN2gzUmw0djJ6T3d3NDhPNEFjUGJlUktVbUctb0EtSHpzQTNlZAGJkaVFFX29fNGYtNnNNQXhSQ1lwTmp2eE1sazc4SC1rZA0pUek9EcFlDQQZDZD",
    sortBy: "most-recent",
    template:
      '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  });

  userFeed.run();

  // This will create a single gallery from all elements that have class "gallery-item"
  $(".gallery").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
      enabled: true,
    },
  });
});
