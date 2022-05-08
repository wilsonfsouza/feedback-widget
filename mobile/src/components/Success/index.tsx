import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

export function Success() {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Thank you for your feedback</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>Submit Another Feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}