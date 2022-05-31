import React, {useRef, useState} from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import { theme } from '../../theme/theme';
import { styles } from './styles';
import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';
import { FeedbackTypes } from '../../utils/feedbackTypes';

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [hasFeedbackSent, setHasFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef?.current?.expand();
  }

  function handleResetFeedback() {
    setFeedbackType(null)
    setHasFeedbackSent(false)
  }

  function handleFeedbackSent() {
    setHasFeedbackSent(true)
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color}/>
      </TouchableOpacity>

      <BottomSheet 
        ref={bottomSheetRef} 
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          hasFeedbackSent ?
          <Success onFeedbackTypeReset={handleResetFeedback} />
          : (
            <>
              {
                feedbackType 
                ? <Form feedbackType={feedbackType} onFeedbackTypeRemoved={handleResetFeedback} onFeedbackSent={handleFeedbackSent} />
                : <Options onFeedbackTypeChanged={setFeedbackType} />
              }
            </>
          )
        }
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);