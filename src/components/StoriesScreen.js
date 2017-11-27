import React, {Component} from 'react';

import {
  View,
  Text,
  ListView
} from 'react-native';

import StoryListItem from './StoryListItem';

class StoriesScreen extends Component {

  constructor(props) {
    super(props);
    this.renderStories = this.renderStories.bind(this);

    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentDidMount() {
    this.props.fetchStories()
  }

  renderStories() {
    stories.map( (story, id) => {
      return (
        <Text key={id}>I'm a story</Text>
      )
    })
  }
  render() {
    return(
      <View>
        <ListView 
          dataSource={this.state.ds.cloneWithRows(this.props.stories)}
          renderRow={ (rowData) => <StoryListItem data={rowData} />}
        />
      </View>
    )
  }
}

export default StoriesScreen;