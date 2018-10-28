import React , { Component } from 'react';
import { Link } from 'react-router-dom';
//import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Card, Image } from 'semantic-ui-react';
import classes from './gallery.css';

class Photo extends Component {
  render() {
    const { post } = this.props;
  
    var img = "http://localhost:3000/assets/gallery/" + post.display_src  ;
   // console.log ('img = ', img ) ;

    return (      
      <Card className={classes.gridfigure}>
        <div className={classes.gridphotowrap}>
          <Link to={`/gallery/${post._id}`}>
            <Image src={img} alt={post.caption} className={classes.gridphoto} />
           </Link>

         {/* // <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
        //  </CSSTransitionGroup> */}

        </div>

        <Card.Content>
          <p>Title : {post.title}</p>
          <p>Note: {post.note}</p>
          
        </Card.Content>
      <br/>
      <Link to={`/gallery/${post._id}`}> Edit </Link>
      <br/>
      </Card>
      
    )
  }
};

export default Photo;
