import { View } from "react-native"
import styled from "styled-components"
import { TextInput as PaperTextInput, Button as PaperButton } from "react-native-paper";

export const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 48px 8px;
    gap: 8px;
`

export const TextInput = styled(PaperTextInput)`
    width: 80%;
`

export const Button = styled(PaperButton)`
    width: 80%;
`