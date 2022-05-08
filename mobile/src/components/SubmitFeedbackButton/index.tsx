import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { theme } from '../../theme/theme';

import { styles } from './styles';

interface SubmitFeedbackButtonProps extends TouchableOpacityProps {
  isLoading: boolean
}

export function SubmitFeedbackButton({isLoading, ...rest}: SubmitFeedbackButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
      <ActivityIndicator 
        color={theme.colors.text_on_brand_color}
      />
      ) : (<Text style={styles.label}>Submit Feedback</Text>)}
    </TouchableOpacity>
  );
}