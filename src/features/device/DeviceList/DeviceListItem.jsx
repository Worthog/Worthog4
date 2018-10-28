import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button, Label  } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
// import DeviceListAttendee from './DeviceListAttendee'
import format from 'date-fns/format'
import { objectToArray } from '../../../app/common/util/helpers'

class DeviceListItem extends Component {
  render() {
    const {device} = this.props
    return (
    <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={device.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/device/${device.deviceid}`}>{device.title}</Item.Header>
                <Item.Description>
                  user id :  {device.userid}                                
                </Item.Description>                              
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /><b>Updated: </b> {format(device.date.toDate(), 'dddd Do MMMM')} at {format(device.date.toDate(), 'HH:mm')}|           
          </span>
        </Segment>
        <Segment>
          <span>
           <b>Device id : </b> {device.deviceid}           
          </span>          
        </Segment>
        <Segment>
        <span>
           <b>Device Token : </b> {device.token}           
          </span>
        </Segment>
        <Segment clearing>
        <span><b>Memo: </b> {device.memo}</span>          
        </Segment>
       
     
       <Segment>

        <Button as={Link} to={`/connect/${device.id}`} color="blue"  content="Select" />           
       
        <Button as={Link} to={`/device/${device.id}`} color="teal"   content="Manage" />

        </Segment>
        </Segment.Group>
    );
  }
}

export default DeviceListItem;
