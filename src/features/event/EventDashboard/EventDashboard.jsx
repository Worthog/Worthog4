import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getEventsForDashboard } from '../eventActions';
import EventList from '../EventList/EventList';
// import LoadingComponent from '../../../app/layout/LoadingComponent';
// import EventActivity from '../EventActivity/EventActivity';

const query = [
  {
    collection: 'activity',
    orderBy: ['timestamp', 'desc'],
    limit: 5
  }
]

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
  // activities: state.firestore.ordered.activity
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  state = {
    moreEvents: false,
    loadingInitial: true,
    loadedEvents: [],
    contextRef: {}
  };

  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: true,
        loadingInitial: false
      });
    } else{
      this.setState({
        loadingInitial: false
      })

    }

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.events !== nextProps.events) {
      this.setState({
        loadedEvents: [...this.state.loadedEvents, ...nextProps.events]
      });
    }
  }

  getNextEvents = async () => {
    const { events } = this.props;
    let lastEvent = events && events[events.length - 1];
    let next = await this.props.getEventsForDashboard(lastEvent);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreEvents: false
      });
    }
  };

  handleContextRef = contextRef => this.setState({contextRef})

  render() {
    const { loading } = this.props;
    const { moreEvents, loadedEvents } = this.state;
    // if (this.state.loadingInitial) return <LoadingComponent inverted={true} />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <div ref={this.handleContextRef}>
          <EventList
            loading={loading}
            moreEvents={moreEvents}
            events={loadedEvents}
            getNextEvents={this.getNextEvents}
          />
          </div>

        </Grid.Column>
        <Grid.Column width={6}>
          <h4>September 19</h4>        
          <p>I've decided that the Blog and the Gallery will be an integral part of the final app.  
            Migrating those functions from the old app will be much easier if we switch to the Saga version. 
            In the long run it might be easier, although there is a lot of prep up front. 
          </p>
          <p>Seems like a lot of work, but we can take it in steps.  Perhaps, during the process we can refine and
            perfect the code.  So it won't feel like a step backwards. You have done all the work, might as well
            put it use. 
          </p>
          <p>Review the Udemy couse on setting up Saga</p>
          <ul>
            <li>Set up Saga, Actions, Reducers</li>
            <li>Migrate the Device functions</li>
            <li>Migrate the Blog</li>
            <li>Migrate the Gallery</li>
          </ul>
          {/* <EventActivity activities={activities} contextRef={this.state.contextRef} /> */}
          <h4>These notes are from EventDashboard.jsx See features/event/eventDashboard</h4>
          <p>Perhaps we need a simple list of devices.  Similar to the main page events list
            but more basic.  Try creating a new page based on the events list, but create a Devie list. 
            Use the simplified version in section #19</p>
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(firestoreConnect(query)(EventDashboard));
