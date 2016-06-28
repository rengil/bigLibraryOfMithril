//controller.js

var init = function () {
  var gritarNome = {};

  gritarNome.state = {
    init: function () {
      gritarNome.state.inputValue = m.prop('Nome Inicial');
      gritarNome.state.echo = function (a,b) {
          b.preventDefault();
          alert(a);
      }
    }
  };

  gritarNome.controller = function() {
      gritarNome.state.init();
  };

  //view.js
  gritarNome.view = function(ctrl) {
      return  m("form", {onsubmit :   
         gritarNome.state.echo.bind(this,
         gritarNome.state.inputValue())} , [ m("input",
          {oninput: m.withAttr("value",   gritarNome.state.inputValue),
          value:   gritarNome.state.inputValue()}),
      m("button[type=submit ]",  'Save')])
  };

  //render
  m.mount(document.body,  gritarNome)
}
