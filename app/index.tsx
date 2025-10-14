import {
    SecureSegmentedPasscodeTextField,
    SecureSegmentedPasscodeTextFieldMethods
} from '@weavr-io/secure-components-react-native';
import { useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Index() {
    const passcodeRef = useRef<SecureSegmentedPasscodeTextFieldMethods>(null);

    const handleTextChange = ({ event }: { event: string; }) => {
        console.log('handleTextChange: ', event);
    }

    const handleOnTextEntryComplete = ({ event }: {
        event: string;
    }) => {
        console.log('handleOnTextEntryComplete: ', event);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Weavr Demo</Text>

            <SecureSegmentedPasscodeTextField
                placeholder="•"
                style={styles.input}
                onTextChanges={handleTextChange}
                onTextEntryComplete={handleOnTextEntryComplete}
                ref={passcodeRef}
                segmentSpacing={16}
                segmentHeight={64}
                enableBorder
                fieldBackgroundColor="blue"
                inactiveFieldBorderColor="yellow"
                minimumWidth={100}
                activeFieldBorderColor="red"
                backgroundViewColor="green"
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
        width: '100%',
    },
});
