import React , { Component } from 'react';
import { Link } from 'react-router-dom';
//import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Card } from 'semantic-ui-react';
import styles from './gallery.css';

class Photo extends Component {
  render() {
    const { post } = this.props;
  
    var img = "http://localhost:3000/assets/gallery/" + post.display_src  ;
   // console.log ('img = ', img ) ;
  //  <Card fluid color='red' header='Option 1' />
    return (      
      <Card fluid as={Link} to={`/gallery/${post._id}`} key={post._id} className={styles.gridfigure}>
        
            <img src={img} alt={post.caption} className={styles.gridphoto} />
       
        <Card.Content>
              <Card.Header textAlign="center">{post.caption}</Card.Header>
              <Card.Meta textAlign="center">
                    <p>add some stuff here </p>
                    <Link to={`/gallery/${post._id}`}> Edit </Link>
              </Card.Meta>          
        </Card.Content>      
      </Card>
      
    )
  }
};

export default Photo;
