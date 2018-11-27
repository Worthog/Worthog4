import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './homepage.css' ;

const notes = ({history}) => {
  return (
    <div>     
           
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <h4>What's New? </h4>
            <p>
              Project list - filter by priority. <br/>
              Updated the Worthog device to OS 8.0.rc11, note running TempNoPub1.ino includes the functions
              but the data is not published. <br/>
              Device Dashboard now shows temp in degrees F. also added a link to get current weather. <br/>
              
            </p>

            <p>
              Let's make this the first page to open after the Home/landing page.
              This will save a call to return the blogs, the original first page. 
            </p>
           
            <p>Updating the project page to get the query filters working.  Moved the query
              from the ToDo Container file to the ToDoList file.  Note you will need to 
              add a Completion Checkbox to the editor.
            </p>

          </Segment>

        
          <Segment>
          <h5>React Redux Saga Firebase </h5> 
            <ul>
            <li><a href="https://react-table.js.org/#/story/readme/" target="_blank" rel="noopener noreferrer" > React Table</a> </li>
            <li><a href="https://rexxars.github.io/react-markdown/" target="_blank" rel="noopener noreferrer" > React-Markdown</a> </li>

            <li><a href="https://redux-saga-firebase.js.org/" target="_blank" rel="noopener noreferrer" > Redux-Saga-Firebase</a> </li>
            <li><a href="http://react-redux-firebase.com" target="_blank" rel="noopener noreferrer"> React-Redux-Firebase</a> </li>
            <li> <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer">Redux Saga Docs</a> </li>
          </ul>
         
          
            <h5>Also worth checking out is firepad : </h5>
            <br/>
            <p>
            <a href="https://firepad.io/" target="_blank" rel="noopener noreferrer">Firepad</a>
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

export default notes;
