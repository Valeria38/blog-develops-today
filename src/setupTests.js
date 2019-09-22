import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Enzyme from 'enzyme';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});
