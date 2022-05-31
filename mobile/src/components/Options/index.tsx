import React from 'react';
import { Text, View } from 'react-native';
import { FeedbackTypes, feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackTypes) => void
}

export function Options({onFeedbackTypeChanged}: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give Your Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} onPress={() => onFeedbackTypeChanged(key as FeedbackTypes)} />
        ))}
      </View>
      <Copyright />
    </View>
  );
}