import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme/theme';
import { feedbackTypes, FeedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { SubmitFeedbackButton } from '../SubmitFeedbackButton';

import { styles } from './styles';

interface FormProps {
  feedbackType: FeedbackTypes
}

export function Form({feedbackType}: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} weight='bold' color={theme.colors.text_secondary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>
      <TextInput 
        multiline 
        style={styles.input} 
        placeholder="Is something not working well? We want to fix that. Describe with details what is happening to you..." 
        placeholderTextColor={theme.colors.text_secondary}  
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onRemoveShot={() => {}}
          onTakeShot={() => {}}
          screenshot="https://github.com/wilsonfsouza.png"
        />
        <SubmitFeedbackButton isLoading={false} />
      </View>
    </View>
  );
}