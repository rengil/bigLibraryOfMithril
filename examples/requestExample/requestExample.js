var root = 'http://jsonplaceholder.typicode.com';
var requestExample = function ()  {
  requests = m.prop([]);


  controllerWithArrayOfObject = function () {
    return {
      dados: m.request({method: "GET", url: root + '/posts/'})
    }
  };

  controllerWithOneObject = function () {
    return {
      dados: m.request({method: "GET", url: root + '/posts/1'})
    }
  };

  viewWithArrayOfObject  = function (ctrl) {
    return ctrl.dados().map(function(dado){
      return m("div", [
        m("h1",dado.userId),
        m("h2",dado.id),
        m("h3",dado.title)
      ])
    })
  };

  viewWithOneObject  = function (ctrl) {
    return m("div", [
          m("h1",ctrl.dados().userId),
          m("h2",ctrl.dados().id),
          m("h3",ctrl.dados().title)
        ])
  };

  m.mount(document.getElementById('one-object'),
   {controller:controllerWithOneObject, view:viewWithOneObject} )

   m.mount(document.getElementById('many-objects'),
    {controller:controllerWithArrayOfObject, view:viewWithArrayOfObject} )
}
