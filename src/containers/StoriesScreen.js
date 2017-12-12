import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StoriesScreen from '../components/StoriesScreen';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
    topStories: state.stories.topStories,
    topStoryIds: state.stories.topStoryIds,
    startIndex: state.stories.startIndex
  }
}

export default connect(mapStateToProps, actions)(StoriesScreen);
