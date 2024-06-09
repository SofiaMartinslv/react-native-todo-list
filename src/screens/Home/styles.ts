import { View, Text, TouchableHighlight, FlatList as ReactFlatList } from 'react-native';
import { Checkbox, FAB } from "react-native-paper";
import styled from "styled-components";

export const Fab = styled(FAB)`
  bottom: 16px;
  right: 16px;
  position: absolute;
  background-color: #152536;
`

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: top;
  padding: 8px;
`

export const Header = styled(View)`
  height: 20%;
  width: 100%;
  background-color: #152536;
  padding: 70px 20px 0 20px;
  border-radius: 0 0 20px 20px;
  margin-bottom: -30px;
`

export const Title = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`

export const ListItem = styled(TouchableHighlight)`
  margin: 4px;
  padding: 0 8px;
	background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Item = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px
`