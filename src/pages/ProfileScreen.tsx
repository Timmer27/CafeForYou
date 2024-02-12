import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  AppContainer,
  InfoBoxWrapper,
  HighlightedBoldText,
  DescText,
  PressedText,
  TextLabel,
} from '../styles/AppStyle';

export function ProfileScreen(): React.JSX.Element {
  return (
    <AppContainer>
      <View>
        <HighlightedBoldText>이종호님</HighlightedBoldText>
      </View>
      {/* 상단 헤더 */}
      <InfoBoxWrapper flexDirection="row" style={{alignItems: 'center', display: 'flex'}}>
        <View>
          <DescText customColor={'#7A7A7A'}>
            가입한 서비스
          </DescText>
          <HighlightedBoldText customMarginBottom={'0%'}
           >
            드립백 정기 구독
          </HighlightedBoldText>
        </View>
        <View
          style={{
            display: 'flex',
          }}>
          <Icon name="text-document" size={15} />
          <Text>결제 내역</Text>
        </View>
      </InfoBoxWrapper>
      {/* <View
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: 'black',
          width: '100%',
        }}>
        <Pressable>
          <Text>최애 커피목록 등등</Text>
        </Pressable>
      </View> */}
      <InfoBoxWrapper>
        <PressedText>
          <TextLabel>개인정보</TextLabel>
        </PressedText>
        <PressedText>
          <TextLabel>결제수단 관리</TextLabel>
        </PressedText>
        <PressedText>
          <TextLabel>주문 내역</TextLabel>
        </PressedText>
        <PressedText>
          <TextLabel>공지사항</TextLabel>
        </PressedText>
        <PressedText>
          <TextLabel>고객센터 문의</TextLabel>
        </PressedText>
        <PressedText>
          <TextLabel>자주하는 질문</TextLabel>
        </PressedText>
        <PressedText>
          <TextLabel>구독취소</TextLabel>
        </PressedText>
      </InfoBoxWrapper>
      {/* <InfoBoxWrapper>
      </InfoBoxWrapper> */}
    </AppContainer>
  );
}
