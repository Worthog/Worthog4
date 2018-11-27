import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

//  need to pass device id to dashboard page see connect page

const DeviceMenu = ({signOut, activeDevice, auth}) => {


  return (
    <Menu.Item position="right">
      
      <Dropdown pointing="top left" text={activeDevice.name}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={`/device/dashboard/${activeDevice.id}`} text="Dashboard " icon="info" />          
          <Dropdown.Item as={Link} to={`/task/${activeDevice.id}`} text="Tasks" icon="tasks" />
          <Dropdown.Item as={Link} to={'/connect/${activeDevice.id'} text="Connect" icon="wifi" />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default DeviceMenu;
