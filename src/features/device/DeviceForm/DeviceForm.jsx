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
import { createDevice, updateDevice } from '../deviceActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import DateInput from '../../../app/common/form/DateInput';


const mapState = (state, ownProps) => {
  let device = {};

  if (state.firestore.ordered.devices && state.firestore.ordered.devices[0]) {
    device = state.firestore.ordered.devices[0];
  }

  console.log("deviceForm MapState ", state.firestore); 
  return {
    initialValues: device,
    device,
    loading: state.async.loading
  };
};

const actions = {
  createDevice,
  updateDevice
  
};



const validate = combineValidators({
  title: isRequired({ message: 'A device name is required' }), 
  description: composeValidators(
    isRequired({ message: 'add some notes about your device' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters'
    })
  )(),
 
  date: isRequired('date')
});

class DeviceForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`devices/${match.params.id}`);
    console.log("deviceForm did mount id : ", this.props.initialValues.id );
  }

  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`devices/${match.params.id}`);
  }

    

  onFormSubmit = values => {
    
    if (this.props.initialValues.id) {      
      
      this.props.updateDevice(values);
      this.props.history.goBack();
    } else {
      this.props.createDevice(values);
      this.props.history.push('/devices');
    }
  };

  render() {
    const { invalid, submitting, pristine, loading } = this.props;
    return (
      <Grid>
        
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Device" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <label>Device Name</label>              
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your device a name"
              />
              <label>Device id</label>              
              <Field
                name="deviceid"
                type="text"
                component={TextInput}
                placeholder="your device id"
              />
             <label>Description</label> 
              <Field
                name="memo"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="A few words about your Device"
              />
              <label>Security Token</label>              
              <Field
                name="token"
                type="text"
                component={TextInput}
                placeholder="your device Token"
              />
              <label>Date</label>  
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="date joined"
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
    reduxForm({ form: 'deviceForm', enableReinitialize: true, validate })(
      DeviceForm
    )
  )
);
