var root = 'myRoot';
var model = {
  getSomeStuff: function () {
    return m.request({method: "GET", url: root + '/stuff/'})
  },

  saveSomeStuff: function () {
    return m.request({method: "POST", url: root + '/save/'})
  },
}

var component = {

  viewModel: {
    init: function () {
      somethingToShow: model.getSomeStuff,
      defineActualStatus: m.prop(),
      saveSomeStuff: model.saveSomeStuff
    }

  },

  controller: function ( args ) {
    component.viewModel.init();
    component.viewModel.defineInitStatus(args) // have to be in the controller because the view auto renders;

  },

  // Using MSX because is better
  view: function () {
    return <div>
              <div class= {(component.viewModel.somethingToShow > 0 : 'active' ? '') + ' someClass someOtherClass'}
                  {component.viewModel.somethingToShow}
              </div>
              <div class = 'button' onclick={component.viewModel.saveSomeStuff.bind(args)}
           </div>;
  }

}


  //render
  m.mount(document.body,  component)
}
