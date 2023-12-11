let pokemonRepository = (function () {
  let t = [];
  function e(e) {
      "object" == typeof e && "name" in e && "detailsUrl" in e ? t.push(e) : console.log("pokemon is not correct");
  }
  function n() {
      return t;
  }
  async function i(t) {
      let e = t.detailsUrl;
      try {
          let n = await fetch(e),
              i = await n.json();
          return (t.imageUrl = i.sprites.front_default), (t.height = i.height), (t.weight = i.weight), (t.types = i.types), (t.abilities = i.abilities), t;
      } catch (a) {
          console.error(a);
      }
  }
  return {
      add: e,
      getAll: n,
      addListItem: function t(e, n) {
          let i = document.createElement("li"),
              a = document.createElement("button"),
              o = document.createElement("img");
          (a.className = "btn btn-info btn-lg btn-block"),
              a.setAttribute("data-target", "#modal"),
              a.setAttribute("data-toggle", "modal"),
              (a.innerText = e.name),
              o.setAttribute("src", e.imageUrl),
              o.setAttribute("alt", e.name),
              a.appendChild(o),
              i.appendChild(a),
              n.appendChild(i),
              a.addEventListener("click", function (t) {
                  var n;
                  let i, a, o, l, p, r, s, d;
                  (n = e),
                      console.table(n),
                      (i = $(".modal-body")),
                      (a = $(".modal-title")),
                      $(".modal-header"),
                      a.empty(),
                      i.empty(),
                      (o = $("<h1>" + n.name + "</h1>")),
                      (l = $('<img class="modal-img" style="width:50%">')),
                      l.attr("src", n.imageUrl),
                      (p = $("<p>height: " + n.height + "</p>")),
                      (r = $("<p>weight: " + n.weight + "</p>")),
                      (s = $("<p>type: " + n.types.map((t) => t.type.name).join(", ") + "</p>")),
                      (d = $("<p>abilities: " + n.abilities.map((t) => t.ability.name).join(", ") + "</p>")),
                      a.append(o),
                      i.append(l),
                      i.append(p),
                      i.append(r),
                      i.append(s),
                      i.append(d),
                      $("#exampleModal").modal("toggle");
              });
      },
      loadList: function t() {
          return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
              .then(function (t) {
                  return t.json();
              })
              .then(function (t) {
                  t.results.forEach(function (t) {
                      e({ name: t.name, detailsUrl: t.url });
                  });
              })
              .catch(function (t) {
                  console.error(t);
              });
      },
      loadDetails: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t, e) {
      pokemonRepository.loadDetails(t).then(function (t) {
          let n = document.getElementById("column" + ((e % 3) + 1));
          pokemonRepository.addListItem(t, n);
      });
  });
});

  

    