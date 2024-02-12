import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import React from 'react';
import {Alert, Button, Pressable, Text, View} from 'react-native';
import {
  AppContainer,
  DescText,
  HighlightedBoldText,
  TextLabel,
} from '../styles/AppStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function HomeScreen(): React.JSX.Element {
  const handleKakaoLogin = async () => {
    const token: KakaoOAuthToken = await login();

    console.log('handleKakaoLogin', 'success', token);
  };
  return (
    <AppContainer>
      {/* 상단 헤더 */}
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            minHeight: hp('55%'),
          }}>
          <View>
            <View>
              <DescText>가입한 서비스</DescText>
              <HighlightedBoldText customFontSize={'4%'}>
                드립백 정기 구독
              </HighlightedBoldText>
            </View>
            <View>
              <Text>seperator</Text>
            </View>
            <View>
              <TextLabel customColor={'#7A7A7A'}>향기로운 생활 ~</TextLabel>
              <TextLabel customColor={'#7A7A7A'}>100일 째</TextLabel>
            </View>
          </View>
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>커피 사진</Text>
              <View>
                <View>
                  <Text>당신은</Text>
                </View>
                <View>
                  <Text>산미 있는 에티오피아 타입</Text>
                </View>
              </View>
            </View>
            <View>
              <Text>당신의 타입을 알려주세요!</Text>
            </View>
          </View>
        </View>
        {/* 광고 배너 */}
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 1,
            padding: 20,
          }}>
          <Pressable>
            <Text>앱 내 자체 광고. 공유하고 10,000원 받아가세요 등등</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <View>
          <TextLabel>오늘까지 신청하고</TextLabel>
        </View>
        <View>
          <TextLabel>내일 아침에 받아보세요~</TextLabel>
        </View>
        <View>
          <Button
            title="구독 신청하기"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
    </AppContainer>
  );
}
