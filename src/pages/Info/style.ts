import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96DCB2',
        alignItems: "center",
    },

    header: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50
    },

    recycleIcon: {
        width: wp('80%'),
        height: hp('30%'),
        marginTop: wp("5%")
    },

    title: {
        marginTop: 75,
        marginLeft: 25,
        alignSelf: "flex-start",
        fontSize: 10,
        fontFamily: 'Signika_700Bold',
        color: "#2A6E45"
    },

    buttonGroup:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        padding: 2,
        marginTop: wp('3%')
    },

    buttons: {
        marginHorizontal: 10,
        padding: 4,
        height: hp('20%') ,
        width: wp('37%'),
        borderRadius: 8,
        justifyContent: "space-around",
        alignItems: "center"
    },

    buttonTrash:{
        backgroundColor: '#2A6E45',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonContact:{
        backgroundColor: '#5390d9',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonStore:{
        backgroundColor: '#87b198',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonAbout:{
        backgroundColor: '#A1524D',
        borderColor: "#8C4843",
        borderWidth: 1
    },

    buttonText: {
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 22,
        textAlign: "center",
    },

    buttonTextSoon: {
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 12,
        textAlign: "center",
    },

    buttonTextTrash: {
        fontSize: 17,
        color: "#A5E198"
    },
    buttonTextAbout: {
        color: "#FFB8B4"
    },
    buttonTextContact:{
        color:"#a2d2ff"
    },
    buttonTextStore:{
        color:"#658b74"
    },

    subTitle:{
        color: "green",
        fontSize: 25,
        marginTop: 5,
        marginLeft: -90,
        fontFamily: "BalsamiqSans_700Bold"
    },

    icon: {
        position:"absolute",
        top: "38%",
        left:"38%"
    },

    footer:{
        backgroundColor: "#7FBA95",
        marginTop: 40,
        width: "100%",
        padding: 7,
        justifyContent: "center",
        alignItems: "center"
    },

    footerText:{
        fontFamily: "BalsamiqSans_400Regular",
        fontSize: 10
    }
})

export default styles;