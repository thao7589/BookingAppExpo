import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Drawer from 'react-native-drawer';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const SideMenu = ({ navigation }) => {
	const [menu, setState] = useState({
		selectedTab: 'Home'
	})
	const closeControlPanel = () => {
		this._drawer.close()
	};
   
	const openControlPanel = () => {
		this._drawer.open()
	};

	return(
		<Drawer 
			openDrawerOffset={ 0.5 }
			tapToClose
			ref={ (ref) => this._drawer = ref }
			content={
				<View style={{ flex: 1, backgroundColor: '#85A6C9', zIndex: -1 }}>
					<View style={{ padding: 20, marginTop: 40 }}>
						<TouchableOpacity onPress={ () => navigation.navigate('Entertainment') }>
							<Text>Entertainment</Text> 
						</TouchableOpacity>
					</View> 
					<View style={{ padding: 20 }}>
						<TouchableOpacity onPress={ () => navigation.navigate('NightLife') }>
							<Text>Night Life</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 20 }}>
						<TouchableOpacity onPress={ () => navigation.navigate('Cart') }>
							<Text>Shopping Cart</Text>
						</TouchableOpacity>
					</View>
				</View>
			}
		>
			<View style={{ flex: 1, backgroundColor: '#fff', margin: 10 }}>
				<Ionicons
					name="md-menu"
					color="black"
					size={32}
					style={styles.menuIcon}
					onPress={openControlPanel}
				/>				
			</View> 
		</Drawer>
	);
}; 

export default SideMenu;

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 1,
		position: 'absolute',
		top: 40
	}
})