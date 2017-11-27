import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StoriesScreen from '../components/StoriesScreen';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
    stories: state.stories.stories,
    topStoryIds: state.stories.topStoryIds,
    sIndex: state.stories.sIndex
  }
}

export default connect(mapStateToProps, actions)(StoriesScreen);
