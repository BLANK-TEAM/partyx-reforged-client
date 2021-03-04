import React from 'react'
import {View, Text, TouchableOpacity} from "react-native";
import styles from './styles'

interface TagItemProps {
    name: string;
}

export default function TagItem(props: TagItemProps) {
    return (
            <TouchableOpacity style={styles.container}>
                    <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center'}}>{props.name}</Text>
            </TouchableOpacity>
    )
}