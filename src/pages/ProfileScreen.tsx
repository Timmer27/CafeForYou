import React from 'react';
import {Pressable, Text, View} from 'react-native';

export function ProfileScreen(): React.JSX.Element {
  return (
    <View
      style={{
        display: 'flex',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        minHeight: 80,
      }}>
      <View>
        <Text>이종호님</Text>
      </View>
      {/* 상단 헤더 */}
      <View
        style={{
          borderWidth: 1,
          borderColor: 'black',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View>
          <Text>가입한 서비스</Text>
          <Text>드립백 정기 구독</Text>
        </View>
        <View>
          <Text>결제 내역</Text>
          <Text>icon</Text>
        </View>
      </View>
      {/* 광고 배너 */}
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Pressable>
          <Text>최애 커피목록 등등</Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <View>
          <Text>개인정보</Text>
        </View>
        <View>
          <Text>결제수단 관리</Text>
        </View>
        <View>
          <Text>주문 내역</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <View>
          <Text>공지사항</Text>
        </View>
        <View>
          <Text>고객센터 문의</Text>
        </View>
        <View>
          <Text>자주하는 질문</Text>
        </View>
        <View>
          <Text>구독취소</Text>
        </View>
      </View>
    </View>
  );
}
