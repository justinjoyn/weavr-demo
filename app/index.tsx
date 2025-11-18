import {
    SecurePasscodeTextField,
    SecurePasscodeTextFieldMethods,
    SecureSegmentedPasscodeTextField,
    SecureSegmentedPasscodeTextFieldMethods
} from '@weavr-io/secure-components-react-native';
import { useRef } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const segmentedPasscodeRef = useRef<SecureSegmentedPasscodeTextFieldMethods>(null);
  const passcodeRef = useRef<SecurePasscodeTextFieldMethods>(null);

  const handleTextChange = ({ event }: { event: string; }) => {
    console.log('handleTextChange: ', event);
  }

  const handleOnTextEntryComplete = ({ event }: { event: string; }) => {
    console.log('handleOnTextEntryComplete: ', event);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Weavr Demo</Text>

      {/* Segmented Passcode Field - Cross-platform */}
      <SecureSegmentedPasscodeTextField
        style={styles.input}
        onTextChanges={handleTextChange}
        onTextEntryComplete={handleOnTextEntryComplete}
        ref={segmentedPasscodeRef}
        
        // Shared props (both platforms)
        enableBorder={true}
        activeFieldBorderColor="red"
        inactiveFieldBorderColor="yellow"
        backgroundViewColor="green"
        segmentSpacing={16}
        minimumWidth={100}
        textSize="18"
      
        // Android-specific
        {...(Platform.OS === 'android' && {
          segmentHeight: 64,
        })}
        
        // iOS-specific
        {...(Platform.OS === 'ios' && {
          placeholder: "•",
          fieldBackgroundColor: "blue"
        })}
      />

      {/* Regular Passcode Field */}
      <SecurePasscodeTextField
        style={styles.input}
        onTextChanges={handleTextChange}
        onTextEntryComplete={handleOnTextEntryComplete}
        ref={passcodeRef}
       
        // iOS styling
        {...(Platform.OS === 'ios' && {
          placeholder: "Enter Passcode",
          placeholderTextColor: "red",
          background: true,
        })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  input: {
    height: 64,
    minWidth: 64,
    width: '100%',
  },
});