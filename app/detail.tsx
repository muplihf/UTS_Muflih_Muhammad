import { View, StyleSheet } from "react-native";
import { ButtonTabs } from "../components/ButtonTabs";
import React, { useState } from 'react';
import { Info, Materi } from "../components/modules/detail";

const Detail = () => {
    const [activeTabs, setActiveTabs] = useState('info');

    const UIActiveTabs = () => {
        if (activeTabs === 'info') return <Info />;
        if (activeTabs === 'index') return <Materi />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <ButtonTabs
                    title="Info"
                    isActive={activeTabs === 'info'}
                    customeStyle={activeTabs === 'info' ? styles.activeTab : styles.inactiveTab}
                    onPress={() => setActiveTabs('info')}
                />
                <ButtonTabs
                    title="Index"
                    isActive={activeTabs === 'index'}
                    customeStyle={activeTabs === 'index' ? styles.activeTab : styles.inactiveTab}
                    onPress={() => setActiveTabs('index')}
                />
            </View>
            <View style={styles.contentContainer}>
                <UIActiveTabs />
            </View>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    tabsContainer: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    activeTab: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    inactiveTab: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Transparan agar terlihat perbedaan
        padding: 10,
        borderRadius: 12,
        marginLeft: 5,
    },
    contentContainer: {
        flex: 1,
        paddingTop: 10,
    }
});
