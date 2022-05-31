import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { ScreenshotButton } from '../ScreenshotButton';
import { SubmitFeedbackButton } from '../SubmitFeedbackButton';

import { theme } from '../../theme/theme';
import { styles } from './styles';
import { feedbackTypes, FeedbackTypes } from '../../utils/feedbackTypes';
import { api } from '../../libs/api';

interface FormProps {
  feedbackType: FeedbackTypes
  onFeedbackTypeRemoved: () => void
  onFeedbackSent: () => void
}

export function Form({feedbackType, onFeedbackSent, onFeedbackTypeRemoved}: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [comment, setComment] = useState('')

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

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return
    }

    setIsSendingFeedback(true)

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'})
    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      })

      onFeedbackSent()
    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackTypeRemoved}>
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
        onChangeText={setComment}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onRemoveShot={handleRemoveScreenshot}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />
        <SubmitFeedbackButton isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}