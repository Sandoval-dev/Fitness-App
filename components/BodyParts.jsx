import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';


const BodyParts = () => {
    const router = useRouter()
    return (
        <View className="mx-4">
            <Text className="font-semibold text-neutral-700" style={{ fontSize: hp(3) }}>Exercises</Text>
            <FlatList data={bodyParts} numColumns={2}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }} keyExtractor={item => item.name} s
                howsVerticalScrollIndicator={false} columnWrapperStyle={{ justifyContent: 'space-between' }} renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />} />
        </View>
    )
}

const BodyPartCard = ({ item,router, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(5)}>
            <TouchableOpacity onPress={() =>router.push({pathname:'/exercises', params:item})} className='flex justify-end p-4 mb-4' style={{ width: wp(44), height: wp(52) }}>
                <Image source={item.image} resizeMode='cover' style={{ width: wp(44), height: wp(52) }} className="rounded-[35px] absolute" />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={{ width: wp(44), height: hp(15) }} start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }} className="absolute bottom-0 rounded-b-[35px]" />
                <Text className="text-white font-semibold text-center tracking-wide" style={{ fontSize: hp(2.5) }}>{item?.name}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default BodyParts