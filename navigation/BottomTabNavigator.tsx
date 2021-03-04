import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from "../screens/ProfileScreen";
import {BottomTabParamList, HomeParamList, NotificationsParamList, ProfileParamList, MenuParamList} from '../types';
import MenuScreen from "../screens/MenuScreen";
import ProfilePicture from "../components/ProfilePicture";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint, showLabel: false}}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={NotificationsNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="notifications-outline" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="person-circle-outline" color={color} size={30}/>,
                }}
            />
            <BottomTab.Screen
                name="Menu"
                component={MenuNavigator}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="menu-outline" color={color} size={30}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerRightContainerStyle: {
                        marginRight: 15,
                    },
                    headerLeftContainerStyle: {
                        marginLeft: 15,
                    },
                    headerTitle: 'Events',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <Ionicons name={"search"} size={30} color={"white"} />
                    ),
                    headerLeft: () => (
                        <ProfilePicture size={40} image={'https://i.pinimg.com/originals/73/94/a9/7394a965a078adc29fce06d03df278c0.jpg'} />
                    )
                }}
            />
        </HomeStack.Navigator>
    );
}

const NotificationsStack = createStackNavigator<NotificationsParamList>();

function NotificationsNavigator() {
    return (
        <NotificationsStack.Navigator>
            <NotificationsStack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{headerTitle: 'Notifications'}}
            />
        </NotificationsStack.Navigator>
    );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{headerTitle: 'Profile'}}
            />
        </ProfileStack.Navigator>
    );
}


const MenuStack = createStackNavigator<MenuParamList>();

function MenuNavigator() {
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{headerTitle: 'Menu'}}
            />
        </MenuStack.Navigator>
    );
}

