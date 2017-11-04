import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StoriesScreen from '../components/StoriesScreen';
import * as StoriesActions from '../actions';

function mapStateToProps(state) {
  return {
    stories: ['story1', 'story2']
  }
}

export default connect(mapStateToProps, StoriesActions)(StoriesScreen);
