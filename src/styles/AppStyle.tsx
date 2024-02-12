import {Pressable, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface AppContainerProps {
  customMargin?: string;
}

interface InfoBoxWrapperProps {
  customMargin?: number;
  customPadding?: number;
  flexDirection?: string;
}

interface HighlightedBoldTextProps {
  customFontSize?: string;
  customColor?: string;
  customMarginBottom?: string;
  customFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

interface TextProps {
  customFontSize?: number;
  customFontColor?: string;
  customMarginBottom?: string;
  customMarginTop?: string;
  customColor?: string;
}

export const AppContainer = styled(ScrollView)<AppContainerProps>`
  display: flex;
  margin-top: ${props =>
    props.customMargin ? wp(props.customMargin) : wp('3%')}px;
  margin-left: ${props =>
    props.customMargin ? wp(props.customMargin) : wp('3%')}px;
  margin-right: ${props =>
    props.customMargin ? wp(props.customMargin) : wp('3%')}px;
  margin-bottom: ${props =>
    props.customMargin ? wp(props.customMargin) : wp('3%')}px;
`;

export const InfoBoxWrapper = styled(View)<InfoBoxWrapperProps>`
  margin-bottom: ${props =>
    props.customMargin ? wp(props.customMargin) : wp('3%')}px;
  padding: ${props =>
    props.customPadding ? wp(props.customPadding) : wp('2%')}px;
  background-color: white;
  border-width: 1px;
  border-radius: ${props =>
    props.customPadding ? wp(props.customPadding) : wp('2%')}px;
  border-color: white;
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: space-between;
  padding-left: ${props =>
    props.customPadding ? wp(props.customPadding) : wp('3%')}px;
  padding-top: ${props =>
    props.customPadding ? wp(props.customPadding * 2) : wp('4%')}px;
  padding-bottom: ${props =>
    props.customPadding ? wp(props.customPadding * 2) : wp('4%')}px;
`;

export const HighlightedBoldText = styled(Text)<HighlightedBoldTextProps>`
  font-size: ${props =>
    props.customFontSize ? wp(props.customFontSize) : wp('5%')}px;
  color: ${props => (props.customColor ? props.customColor : 'black')};
  margin-bottom: ${props =>
    props.customMarginBottom ? wp(props.customMarginBottom) : wp('3%')}px;
  font-weight: ${props =>
    props.customFontWeight ? props.customFontWeight : 'bold'};
`;

export const DescText = styled(Text)<TextProps>`
  font-size: ${props =>
    props.customFontSize ? wp(props.customFontSize) : wp('3%')}px;
  margin-bottom: ${props =>
    props.customMarginBottom ? wp(props.customMarginBottom) : wp('1%')}px;
  color: ${props => (props.customColor ? props.customColor : 'black')};
`;

export const PressedText = styled(Pressable)<TextProps>`
  margin-bottom: ${props =>
    props.customMarginBottom ? wp(props.customMarginBottom) : wp('3%')}px;
  margin-top: ${props =>
    props.customMarginTop ? wp(props.customMarginTop) : wp('3%')}px;
`;

export const TextLabel = styled(Text)<TextProps>`
  color: ${props =>
    props.customFontColor ? props.customFontColor : 'black'};
`;

