import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface SuccessProps {
  onFeedbackTypeReset: () => void
}

export function Success({onFeedbackTypeReset}: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Thank you for your feedback</Text>

      <TouchableOpacity style={styles.button} onPress={onFeedbackTypeReset}>
        <Text style={styles.buttonLabel}>Submit Another Feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}