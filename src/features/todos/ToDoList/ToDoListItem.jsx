import React, { Component } from 'react';
import { Segment, Item, Icon, Button  } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
// import DeviceListAttendee from './DeviceListAttendee'
// import format from 'date-fns/format'
// import { objectToArray } from '../../../app/common/util/helpers'
import CodeBlock from '../../../app/common/util/code-block'
import moment from 'moment';
import ReactMarkdown from 'react-markdown' ;
import styles from '../ToDo.css' ;

class ToDoListItem extends Component {
  render() {
    const {todo} = this.props
    return (
    <Segment.Group className={styles.todopost}>
        <Segment>
          <Item.Group>
            <Item>
             
              <Item.Content>
                <h3 className={styles.todoheader} >{todo.title} </h3>                
                <Item.Description>
                  owner :  {todo.username}  
                  &nbsp; &nbsp; &nbsp;
                  <b>Updated: </b>{moment(todo.updated.toDate()).format("dddd, MMMM Do YYYY, h:mm a")}
                </Item.Description>                              
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
           <span>
       
            <b>Start: </b>{moment(todo.startdate.toDate()).format("MMMM Do YYYY")}
             &nbsp; &nbsp; &nbsp;
            <b>End: </b>{moment(todo.enddate.toDate()).format("MMMM Do YYYY")}
            
          </span> 
        </Segment>
              
        <Segment >
        <ReactMarkdown
            className="result"
            source={todo.note}            
            renderers={{code: CodeBlock}}
          />                 
        </Segment>
      
       <Segment clearing>         
       
        <Button as={Link} to={`/todo/${todo.id}`}  icon="edit" floated="right" color="blue" content="Manage" />

        </Segment>
        </Segment.Group>
    );
  }
}

export default ToDoListItem;
