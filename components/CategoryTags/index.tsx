import React from 'react'
import {View} from "react-native";
import TagItem from "./TagItem";

export default function CategoryTags() {
    return (
        <View style={{width: '100%'}}>
            <TagItem name={"Musical festival"} />
        </View>
    )
}