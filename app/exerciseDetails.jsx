import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';


export default function exerciseDetails() {
    const item = useLocalSearchParams()
    const router = useRouter()
    console.log('item', item)
    return (
        <View className="flex-1 flex">
            <Animated.View entering={FadeIn} className="shadow-md bg-neutral-200 rounded-b-[40px]">
                <Image className='rounded-b-[40px]' source={{ uri: item.gifUrl }} contentFit='cover' style={{ width: wp(100), height: wp(100) }} />
            </Animated.View>
            <TouchableOpacity onPress={() => router.back()} className='mx-2 absolute rounded-full mt-2 right-3 top-7'>
                <AntDesign name='closecircle' size={hp(3)} color='#f43f5e' />
            </TouchableOpacity>
            <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
                <Text className="font-semibold text-neutral-800 tracking-wide" style={{ fontSize: hp(3.5) }}>
                    {item.name}
                </Text>
                <Text className=" text-neutral-800 tracking-wide" style={{ fontSize: hp(2) }}>
                    Equipment : <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
                </Text>
                <Text className=" text-neutral-800 tracking-wide" style={{ fontSize: hp(2) }}>
                    Secondary Muscles : <Text className="font-bold text-neutral-800">{item?.secondaryMuscles}</Text>
                </Text>
                <Text className=" text-neutral-800 tracking-wide" style={{ fontSize: hp(2) }}>
                    Target Muscle : <Text className="font-bold text-neutral-800">{item?.target}</Text>
                </Text>
                <Text className="font-semibold text-neutral-800 tracking-wide" style={{ fontSize: hp(3) }}>
                    Instructions
                </Text>
                {
                    item.instructions.split(',').map((instruction, index) => {
                        return (
                            <Animated.Text entering={FadeInDown.delay((index+6)*100).duration(200).springify()} key={instruction} style={{ fontSize: hp(1.7) }}>
                                {instruction}
                            </Animated.Text>
                        )
                    })
                }
              

            </ScrollView>
        </View>
    )
}