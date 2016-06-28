//controller.js

var data =
  [{name:'Messi', email:'lionel@messi', content: 'best and unlucky'},
   {name:'Ribery', email:'rb@7', content: 'Can run a lot'},
   {name:'Suarez', email:'suarez@uruguay', content: 'does he like mate and alfajor?'},
   {name:'Pirlo', email:'prilo@pirlo', content: 'got free kick stuff'},
   {name:'Cebolinha', email:'celobinha@aloba', content: 'Ploglamando Mitlil'}
]


var init = function () {
  var card = {};
  var manyCards = {};

  manyCards.view = function () {
    return m("div", {class: "columns "},
       [
          data.map( function (item) {
          return m(card, item);
        })
      ])
}

  //view.js
  card.view = function(controller, args) {
    return m("div", {class: "card "} ,  [
          m("div", {class: "card-content"} , [
            m("p", {class: "title is-5"}, args.name),
            m("p", {class: "subtitle is-6"}, args.email)
          ]),
          m("div", {class: "card-content"} ,
            args.content)
        ])
  };

  m.mount(document.body, manyCards);

  //m.mount(document.body,  m(card, {name: 'Flávia Xicára de Pikachu' , email: 'pikachu.tem.ka.pi@gmail.com', content: ' Eu estou content porque estou fazendo minha lâmpada iluminar minha sala de jantar.'}))
}
