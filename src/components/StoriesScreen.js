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
  }

  componentDidMount() {
    this.props.fetchTopStoryIds();
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
    this.props.fetchTopStories(this.props.topStoryIds, this.props.startIndex, 12)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }


  render() {
    return(
      <View>
        <FlatList
          data={this.props.topStories}
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