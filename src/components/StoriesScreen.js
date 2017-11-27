import React, {Component} from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';

import StoryListItem from './StoryListItem';

class StoriesScreen extends Component {

  constructor(props) {
    super(props);
    this.renderStories = this.renderStories.bind(this);
  }

  componentDidMount() {
    this.props.fetchStories(this.props.sIndex)
  }

  renderStories() {
    stories.map( (story, id) => {
      return (
        <Text key={id}>I'm a story</Text>
      )
    })
  }

  renderSeparator() {
    return(
      <View style={{
        backgroundColor: '#ccc',
        height: 1,
        width: "100%"
      }} />
    );
  };

  renderFooter() {

    //if (!this.props.apiRequestInProgress) return null; loading should come from application state

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleEndReached() {
    this.props.fetchNextTopStories(this.props.topStoryIds, 13, 12)
  }


  render() {
    return(
      <View>
        <FlatList
          data={this.props.stories}
          renderItem={ ({item}) => <StoryListItem data={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.handleEndReached()}
        />
      </View>
    )
  }
}

export default StoriesScreen;