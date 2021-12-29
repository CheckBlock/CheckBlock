import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//import components to test
import Navbar from '../client/Components/Navbar.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

import RangeSlider from '../client/Components/RangeSlider.jsx'
import MapContainer from '../client/Containers/MapContainer.jsx'
import SidebarContainer from '../client/Containers/SidebarContainer.jsx'

import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box';


// Newer Enzyme versions require an adapter to a particular version of React
Enzyme.configure({ adapter: new Adapter() });

describe ('React 17 unit tests', ()=> {

  describe('Navbar Component',() => {

    const wrapper = shallow(<Navbar/>);

    it('Renders a Typography / text ', () => {
      expect(wrapper.text()).toEqual('Neighborpedia');
    })

    it('Renders an icon button and links to the github repo', () => {
        // expect(wrapper.containsMatchingElement(<IconButton />)).toEqual(true);
    })

  })

  describe('Range Slider Component', () => {

    const wrapper = shallow(<RangeSlider/>);


    it('renders a slider component', () => {
      expect(wrapper.containsMatchingElement(<Slider />)).toEqual(true);
    })

    it('should call onchange',() => {

      // const onChangeMock = jest.fn();       
      // // const component = shallow(<Slider onChange={onChangeMock}  />);
      // // component.simulate('change');
      // // expect(onChangeMock).toEqual(onChangeMock);
      // // wrapper.containsMatchingElement(<Slider />).simulate('change')

      // const slide = shallow(<Slider/>);

      // wrapper.find('Slider').simulate('change');
      // expect(onChangeMock).toEqual(onChangeMock);

    })

    })


})

