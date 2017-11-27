import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Linking
} from 'react-native';

const StoryListItem = (props) => {
  return(
    <View style={styles.container} >
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.author}>{props.data.by}</Text>
      <Text style={styles.comments}>{props.data.descendants} comments</Text>
    </View>
  )
}

export default StoryListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  comments: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'right'
  }
})