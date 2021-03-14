import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';

import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';
import About from '../screens/About';
import Profile from '../screens/Profile';

const MainStack = createStackNavigator();
const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainStack.Screen name="MainTabs" component={MainTabs} />
			<MainStack.Screen name="SecondScreen" component={SecondScreen} />
		</MainStack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				tabStyle: { borderTopWidth: 0 },
				style: { borderTopWidth: 1, borderColor: '#c0c0c0' },
				activeTintColor: Colors.primary,
			}}
		>
			{/* these icons using Ionicons */}
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Home" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'md-home'} />
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Profile" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'person'} />
					),
				}}
			/>
			<Tabs.Screen
				name="About"
				component={About}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="About" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'ios-information-circle'} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default () => {
	return (
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	);
};
