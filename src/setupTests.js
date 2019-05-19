import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* istanbul ignore next */
configure({ adapter: new Adapter() });

window.google = {
  maps: {
    Map: class {},
    Marker: class {}
  }
};
