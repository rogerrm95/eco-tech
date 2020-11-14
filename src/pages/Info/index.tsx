import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Estilo //
import styles from './style'

// Imagens | Icones //
import recycle from './../../assets/images/icons/recycle.png'
import { FontAwesome } from '@expo/vector-icons'
import TopBarHeader from '../../components/TopBarHeader'

function Info() {
    return (
        <SafeAreaView style={styles.container}>
            <TopBarHeader title={'Informações'} />
            <View>
                <Image source={recycle} style={styles.recycleIcon} resizeMode='contain' />
                <FontAwesome name='info-circle' size={40} color={"#2A6E45"} 
                style={styles.icon}/>
            </View>
            <Text style={styles.subTitle}>
                Selecione uma opção:
            </Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={[styles.buttons, styles.buttonTrash]} >
                    <Text style={[styles.buttonText, styles.buttonTextTrash]}>Lixo-Eletronico</Text>
                    <FontAwesome name='info-circle' size={40} color={"#A5E198"} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.buttonAbout]} >
                    <Text style={[styles.buttonText, styles.buttonTextAbout]} >Sobre nós</Text>
                    <FontAwesome name='recycle' size={40} color={"#FFB8B4"} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonGroup}> 
            <TouchableOpacity style={[styles.buttons, styles.buttonContact]} >
                    <Text style={[styles.buttonText, styles.buttonTextContact]}>Trabalhe Conosco</Text>
                    <FontAwesome name='briefcase' size={40} color={"#A5E198"} />
                </TouchableOpacity>

                {/* TODO: Corrigir quebra de linha abaixo */}
                <TouchableOpacity style={[styles.buttons, styles.buttonStore]} >
                    <Text style={[styles.buttonText, styles.buttonTextStore]} >Loja virtual</Text>
                    <Text style={[styles.buttonTextSoon, styles.buttonTextStore]} >(Em Breve)</Text>
                    <FontAwesome name='shopping-cart' size={40} color={"#658b74"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Info;