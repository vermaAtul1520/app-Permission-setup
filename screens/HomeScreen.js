import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

export default function HomeScreen (){
    return (
        <View style={{display:"flex",backgroundColor:'black'}}>
            <SafeAreaView style={{marginBottom:-3}}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:4}}>
                    <Bars3CenterLeftIcon
                    size={30}
                    strokeWidth={2}
                    color={'white'}
                    />
                    <Text style={{color:'white',fontSize:20,fontFamily:'bold',fontWeight:800}}>
                        <Text style={{color:'yellow'}}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon
                        size='30'
                        strokeWidth={2}
                        color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                <Text>Hiiii</Text>
            </SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}>

            </ScrollView>
        </View>
    )
}