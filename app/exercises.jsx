import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-virtualized-view'
import { demoExercises } from '../constants'
import ExercisesList from '../components/ExercisesList';

export default function exercises() {
  const router = useRouter()
  const [exercises, setExercises] = useState([])
  const item = useLocalSearchParams()
  //console.log('item', item)

  useEffect(() => {
    if (item) getExercises(item.name)
  }, [item])

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodypart(bodyPart)
    //console.log('data', data)
    setExercises(data)
  }
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image source={item.image} style={{ width: wp(100), height: hp(45) }} className="rounded-b-[40px]" />
      <TouchableOpacity onPress={() => router.back()} style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }} className="bg-rose-500 mx-4 flex justify-center items-center pr-1 absolute rounded-full">
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text style={{ fontSize: hp(3.5) }} className="font-semibold text-neutral-700">
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExercisesList data={exercises}/>
        </View>
      </View>

    </ScrollView>
  )
}