import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions'
import styles from './navbar.css' ;


const actions = {
  openModal
}

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/')
  };

  render() {
    const { auth, profile} = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty
    return (
      <Menu inverted fixed="top" className={styles.fixedmenu}>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/blogs" name="Blogs" />
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated &&
          <Menu.Item as={NavLink} to="/people" name="People" />}
          {authenticated &&
          <Menu.Item as={NavLink} to="/devices" name="Devices" />}
          <Menu.Item as={NavLink} to="/device/stats" name="Stats" />
          <Menu.Item as={NavLink} to="/device/table" name="Table" />
          <Menu.Item as={NavLink} to="/gallery" name="Gallery" />
          {/* {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"              
              content="Create Event"
            /> 
          </Menu.Item>}*/}


          {/* {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              to="/addDevice"
              floated="right"              
              content="Add Device"
            />
          </Menu.Item>} */}

            {/* {authenticated &&
              <Menu.Item>
                <Button
                  as={Link}
                  to="/addBrew"
                  floated="right"              
                  content="New"
                />
              </Menu.Item>} */}

          {authenticated ? ( 
            <SignedInMenu auth={auth} profile={profile} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
