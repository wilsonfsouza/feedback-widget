import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { captureScreen } from 'react-native-view-shot'

import { ScreenshotButton } from '../ScreenshotButton';
import { SubmitFeedbackButton } from '../SubmitFeedbackButton';

import { theme } from '../../theme/theme';
import { styles } from './styles';
import { feedbackTypes, FeedbackTypes } from '../../utils/feedbackTypes';

interface FormProps {
  feedbackType: FeedbackTypes
}

export function Form({feedbackType}: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  function handleRemoveScreenshot() {
    setScreenshot(null)
  }

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
          onRemoveShot={handleRemoveScreenshot}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />
        <SubmitFeedbackButton isLoading={false} />
      </View>
    </View>
  );
}