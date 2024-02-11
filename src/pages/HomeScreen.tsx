import React from 'react';
import {Pressable, Text, View} from 'react-native';

export function HomeScreen(): React.JSX.Element {
    return (
      <View>
        {/* 상단 헤더 */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            // marginBottom: 20,
            minHeight: 80
          }}>
          <View style={{}}>
            <View>
              <Text>가입한 서비스</Text>
              <Text>드립백 정기 구독</Text>
            </View>
            <View>
              <Text>seperator</Text>
            </View>
            <View>
              <Text>향기로운 생활 ~</Text>
              <Text>100일 째</Text>
            </View>
          </View>
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text>커피 사진</Text>
              </View>
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
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
          }}>
          <Pressable>
            <Text>앱 내 자체 광고. 공유하고 10,000원 받아가세요 등등</Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
          }}>
          <View>
            <Text>오늘까지 신청하고</Text>
          </View>
          <View>
            <Text>내일 아침에 받아보세요~</Text>
          </View>
          <View>
            <Pressable>
              <Text>구독 신청하기</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
  