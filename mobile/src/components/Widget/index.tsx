import { ChatTeardropDots } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme/theme';

import { styles } from './styles';

export function Widget() {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color}/>
      </TouchableOpacity>
    </>
  );
}