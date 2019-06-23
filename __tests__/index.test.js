import { shallow } from 'enzyme';

import App from '../pages/index';

describe('With Enzyme', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('App renders', () => {
    expect(wrapper.find('Container')).toHaveLength(1);
  });
});
