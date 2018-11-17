import React from 'react';
import { Grid, Segment, Container, Icon  } from 'semantic-ui-react';
import styles from './homepage.css' ;

// <div className={`ui selection dropdown ${styles.custom}`}></div>
// <div className="ui inverted vertical masthead center aligned segment">
// <div className="ui text container"></div>
const HomePage = ({history}) => {
  return (
    <div>     
      <div className={styles.masthead} >        
        <Container className={styles.textcontainer} >
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">Worthog 4</div>
          </h1>
          

          <Container>
          <h4>version 1.0</h4>
          <div onClick={() => history.push('/blogs')} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
          </Container>
        </Container>
        
      </div>
     
      <Grid centered columns={1}>
        <Grid.Column width={10}>
                  
          <h4>Reference Links </h4>
          <Segment>
          <h5>Firebase & Firestore</h5> 
            <ul>
 
            <li><a href="https://redux-saga-firebase.js.org/" target="_blank" rel="noopener noreferrer" > Redux-Saga-Firebase</a> </li>
            <li><a href="http://react-redux-firebase.com" target="_blank" rel="noopener noreferrer"> React-Redux-Firebase</a> </li>
            <li> <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer">Redux Saga Docs</a> </li>
          </ul>

            <h5><b>Firestore</b> Examples</h5>

            <ul>
              <li><a href="https://github.com/prescottprue/redux-firestore/" target="_blank" rel="noopener noreferrer" > Redux Firestore</a> </li>
              <li><a href="https://github.com/prescottprue/redux-firestore/tree/master/examples/basic" target="_blank" rel="noopener noreferrer" > Redux-Firestore Example</a> </li>

            </ul>
            <p>Checkout the example above for a very extensive explanation of setting up and using Redux-Firestore
              installed to D:\react\firestore-Todo  folder. 
            </p>

            <h5>Firebase Examples</h5>

            <ul>
              
              <li><a href="https://redux-saga-firebase.js.org/" target="_blank" rel="noopener noreferrer" > Redux-Saga-Firebase</a> </li>
              <li><a href="http://react-redux-firebase.com" target="_blank" rel="noopener noreferrer"> React-Redux-Firebase</a> </li>
              <li> <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer">Redux Saga Docs</a> </li>
            </ul>



          <h5>  <Icon name='github' size='large' /> Github</h5>           
          <ul>
            <li><a href=" https://github.com/Worthog/Worthog4" target="_blank" rel="noopener noreferrer" > Worthog 4.0</a> </li>
            <li><a href="https://code.visualstudio.com/docs/editor/versioncontrol/" target="_blank" rel="noopener noreferrer" >Version Control with VScode</a> </li>
            <li><a href="https://github.com/explore/" target="_blank" rel="noopener noreferrer" > Explore Github</a> </li>
            <li><a href="https://help.github.com/articles/git-and-github-learning-resources/" target="_blank" rel="noopener noreferrer" > Learning Github</a> </li> 
            <li><a href="https://git-scm.com/book/en/v2/" target="_blank" rel="noopener noreferrer" > Git Book</a> </li>
            <li><a href=" https://guides.github.com/activities/hello-world/" target="_blank" rel="noopener noreferrer" > Git Guide</a> </li>
            <li><a href="https://code.visualstudio.com/docs/introvideos/versioncontrol/" target="_blank" rel="noopener noreferrer" > VScode Github Video</a> </li>
           
          </ul>

            <h5>Text Editors : </h5>
            <br/>
            <p>
            <a href="https://firepad.io/" target="_blank" rel="noopener noreferrer">Firepad</a>
            {' '}{' '}
            Firepad doesn't seem to allow for multiple records, at least it's not in plain sight.
            </p>
            <p>
            Perhaps building a Rich Text Editor with React and Draft.js is a better choice? 
            &nbsp;&nbsp;&nbsp;
            <a href="https://medium.com/@siobhanpmahoney/building-a-rich-text-editor-with-react-and-draft-js-part-3-persisting-rich-text-data-to-server-b298540ba8d8" target="_blank" rel="noopener noreferrer">Draft - Server</a>
            </p>
            <li><a href="https://react-table.js.org/#/story/readme/" target="_blank" rel="noopener noreferrer" > React Table</a> </li>
            <li><a href="https://rexxars.github.io/react-markdown/" target="_blank" rel="noopener noreferrer" > React-Markdown</a> </li>

          </Segment>
          <Segment>
            <h4>Reference</h4>

            <a href=" https://formidable.com/open-source/victory/docs/" target="_blank" rel="noopener noreferrer">Victory Charts</a>


            <p>Here is a nice article on using the Spread Operator with Redux. 
            <a href=" https://redux.js.org/recipes/usingobjectspreadoperator/" target="_blank" rel="noopener noreferrer">Spread Operator with Redux</a>
           
            </p>

          <p>Particle API : 
             <a href="https://docs.particle.io/reference/javascript/" target="_blank" rel="noopener noreferrer">Particle Javascript Docs</a>
             <a href="https://docs.particle.io/reference/api/" target="_blank" rel="noopener noreferrer">Particle Cloud Docs</a>           
          </p>  
          <p>React-Bootstrap : 
            <a href="https://react-bootstrap.github.io/components.html#grid" target="_blank" rel="noopener noreferrer">React-Bootstrap</a>
          </p>
           <p>React-Widgets : Date Time Picker  
            <a href="http://jquense.github.io/react-widgets/docs/#/datetime-picker?_k=4swym3" target="_blank" rel="noopener noreferrer">React-Widgets</a>
          </p>
          <p>Redux-Forms :  
            <a href="http://redux-form.com/6.5.0/" target="_blank" rel="noopener noreferrer">Redux Forms</a>
          </p>
        
          
          <p>Moment-Format (date Time) :  
            <a href="http://momentjs.com/docs/#/displaying/format/" target="_blank" rel="noopener noreferrer">Moment.js</a>
          </p>
           <p>Mongo db :  
            <a href="https://docs.mongodb.com/manual/reference/method/cursor.sort/#cursor.sort" target="_blank" rel="noopener noreferrer">Mongodb.js</a>
          </p>
            <p>Mongoose Users Guide:  
            <a href="http://mongoosejs.com/docs/guide.html" target="_blank" rel="noopener noreferrer">Mongoose.js</a>
          </p>
           <p>Flex-Box Guide:  
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">Flex-box</a>
          </p>
          <p>React-Router Guide:  
            <a href="https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating" target="_blank" rel="noopener noreferrer">React-Router</a>
          </p>
          <p>React-Bootstrap-Table:  
            <a href="http://allenfang.github.io/react-bootstrap-table/docs.html" target="_blank" rel="noopener noreferrer">React Bootstrap Table</a>
          </p>
         <p> Webpack - version 2.6.1 - 
            <a href="https://webpack.js.org/guides/" target="_blank" rel="noopener noreferrer">WebPack</a>
          </p>

          <p>
            <a href="https://lodash.com/" target="_blank" rel="noopener noreferrer">Lo Dash</a>
          </p>
          
          <p>
            <a href="http://visjs.org/index.html"  target="_blank" rel="noopener noreferrer">VIS.js</a>
          </p>
          <p>
            <a href="http://uber.github.io/react-vis/#/documentation/overview/getting-started"  target="_blank" rel="noopener noreferrer">react-VIS.js</a>
          </p>
          </Segment>
       
          <h4>Stuff to Check out </h4>
          <Segment>

          <p>Firebase Queries:
          <a href="https://firebase.google.com/docs/firestore/query-data/order-limit-data" target="_blank" rel="noopener noreferrer">Firebase Order/Limit Data</a>
          </p>


          <p>Firebase Authentication in React, Redux (Message Board pt 2)
          <a href="https://www.youtube.com/watch?v=xWWyZou370k" target="_blank" rel="noopener noreferrer">Firebase Auth</a>
          </p>

          <p>Visjs.org  : 
            A chart and timeline app.
            <a href="http://visjs.org" target="_blank" rel="noopener noreferrer">Visjs</a>
          </p>    
                  
          <p>Draft.js</p>
          <p>
            See the NEW editor recently released by Facebook.  
            Looks like a good choice if you want a rich text editor in a react application.  
            <a href="https://github.com/facebook/draft-js" target="_blank" rel="noopener noreferrer">Draft.js </a>          
          </p> 
          </Segment>
       
          <h4>Blogs you should read </h4>
          <Segment>
          <p>Particle - Azure : 
            <a href="https://community.particle.io/t/microsoft-partnership/26736" target="_blank" rel="noopener noreferrer">Microsoft Partnership?</a>
          </p>    
          <p>Hacking with React : 
            <a href="https://lodash.com/docs/" target="_blank" rel="noopener noreferrer">Lo-Dash</a>
          </p>          
          <p>Practical Redux : </p>
          <p>
          Useful techniques for using Redux-ORM to help manage your normalized state, part 1:
          Redux-ORM use cases and basic usage
            <a href="http://blog.isquaredsoftware.com/series/practical-redux/" target="_blank" rel="noopener noreferrer">Practical Redux </a>          
          </p> 
          </Segment>
        </Grid.Column>
      </Grid>


    </div>
  );
};

export default HomePage;
