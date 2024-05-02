import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';


export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style='dark' />

            {/* puncline and avatar */}
            <Animated.View entering={FadeInRight.delay(200).springify()} className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-neutral-700">
                        READY TO
                    </Text>
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-rose-500">
                        WORKOUT
                    </Text>
                </View>
                <View className="flex justify-center items-center space-y-2">
                    <Image className="rounded-full" style={{ height: hp(6), width: hp(6) }} source={require('../assets/images/avatar.jpeg')} />
                    <View style={{ height: hp(5.5), width: hp(5.5) }} className="bg-neutral-200 border-[3px] border-neutral-300 rounded-full flex justify-center items-center">
                        <Ionicons name="notifications" size={hp(3)} color="#F4405D" />
                    </View>

                </View>
            </Animated.View>
            {/* image slider */}
            <Animated.View entering={FadeInLeft.delay(300).springify()}>
                <ImageSlider />
            </Animated.View>
            <View className="flex-1">
               <BodyParts/>
            </View>
        </SafeAreaView>
    )
}