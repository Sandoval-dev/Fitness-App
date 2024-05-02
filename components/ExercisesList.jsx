import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router'
import Animated, { BounceIn } from 'react-native-reanimated';

export default function ExercisesList({ data }) {
    const router = useRouter()
    return (
        <View>
            <FlatList data={data} numColumns={2}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }} keyExtractor={item => item.name} s
                howsVerticalScrollIndicator={false} columnWrapperStyle={{ justifyContent: 'space-between' }} renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />} />
        </View>
    )
}

const ExerciseCard = ({ item, router, index }) => {
    return (
        <Animated.View entering={BounceIn.duration(400).delay(index*200).springify()}>
            <TouchableOpacity onPress={() => router.push({pathname:'/exerciseDetails',params:item})} className="flex py-3 space-y-2">
                <View className="bg-neutral-200 shadow rounded-[25px]">
                    <Image className="rounded-[25px]" source={{ uri: item.gifUrl }} contentFit='cover' style={{ width: wp(44), height: wp(52) }} />
                </View>
                <Text className="text-neutral-700 font-semibold ml-1 tracking-wide" style={{ fontSize: hp(1.7) }}>
                    {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</Text>

            </TouchableOpacity>
        </Animated.View>
    )
}