import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

class StoriesScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchStories()
  }

  renderStories() {
    console.log('running renderStories')
    this.props.stories.stories.map( (story, id) => {
        return (
          <Text key={id}>{story}</Text>
        )
      })
  }
  render() {
    const stories = this.props.stories
    console.log(this.props.stories.stories)
    return(
      <View>
        {stories.stories && stories.stories.length && this.renderStories()}
      </View>
    )
  }
}

export default StoriesScreen;