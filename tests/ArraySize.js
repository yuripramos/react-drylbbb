import chai from 'chai';
var assert = chai.assert;
//Test One
describe('Response Fetched Array', function(){

  it('Array of objects should return 52', function() {
    import TestUtils = React.addons.TestUtils;
  	import MyComponent from '../app/layout/app.js';
  	var renderedTree = TestUtils.renderIntoDocument(<Main />);
  	var renderedMyComponent = TestUtils.findRenderedDOMComponentWithClass(renderedTree, 'app')
    assert(this.renderedMyComponent.state.items.length == 52);
  });

});


