import React, {useEffect} from 'react';
import {
  KakaoOAuthToken,
  KakaoProfile,
  KakaoShippingAddresses,
  getProfile,
  login,
  logout,
  shippingAddresses,
  unlink,
} from '@react-native-seoul/kakao-login';
import {Button, View} from 'react-native';

export default function Login() {
  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    console.log(JSON.stringify(token));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    console.log(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();

    console.log(JSON.stringify(profile));
  };

  const getKakaoShippingAddresses = async (): Promise<void> => {
    const addresses: KakaoShippingAddresses = await shippingAddresses();

    console.log(JSON.stringify(addresses));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();
    console.log(message);
  };

  return (
    <View>
      <Button title="카카오 로그인" onPress={signInWithKakao} />
      <Button title="카카오 로그 아웃" onPress={signOutWithKakao} />
      <Button title="카카오 프로필 조회" onPress={getKakaoProfile} />
      <Button
        title="카카오 shipping 조회"
        onPress={getKakaoShippingAddresses}
      />
      <Button title="카카오 unlink" onPress={unlinkKakao} />
    </View>
  );
}
