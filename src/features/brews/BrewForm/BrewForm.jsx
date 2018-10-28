import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withFirestore } from 'react-redux-firebase';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import { createEvent, updateEvent, cancelToggle } from '../eventActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import DateInput from '../../../app/common/form/DateInput';


const mapState = (state, ownProps) => {
  let event = {};

  if (state.firestore.ordered.events && state.firestore.ordered.events[0]) {
    event = state.firestore.ordered.events[0];
  }

  return {
    initialValues: event,
    event,
    loading: state.async.loading
  };
};

const actions = {
  createEvent,
  updateEvent,
  cancelToggle
};



const validate = combineValidators({
  title: isRequired({ message: 'A name is required' }), 
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters'
    })
  )(),
 
  date: isRequired('date')
});

class BrewForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`events/${match.params.id}`);
  }

  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }

    

  onFormSubmit = values => {
    
    if (this.props.initialValues.id) {
      
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      this.props.createEvent(values);
      this.props.history.push('/events');
    }
  };

  render() {
    const { invalid, submitting, pristine, loading } = this.props;
    return (
      <Grid>
        
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Brew" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <label>Brew Name</label>              
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your Brew a name"
              />
             <label>Description</label> 
              <Field

                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="A few notes about your Brew"
              />
              <label>Device id</label>              
              <Field
                name="deviceid"
                type="text"
                component={TextInput}
                placeholder="the selected device id"
              />
              <label>Start Date</label>  
              <Field
                name="startdate"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="start date "
              />
              <label>End Date</label>  
              <Field
                name="enddate"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="estimated or actual finish date "
              />
              <label>Expiry Date</label>  
              <Field
                name="expires"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="estimated expiry date "
              />
              <Button
                loading={loading}
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button disabled={loading} onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
              
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(
  connect(mapState, actions)(
    reduxForm({ form: 'brewForm', enableReinitialize: true, validate })(
      BrewForm
    )
  )
);
