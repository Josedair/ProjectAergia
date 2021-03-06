// import { Dimensions } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';

// const imageWidth = Dimensions.get('window').width / 2;

// export default EStyleSheet.create({
//     $largeContainerSize: imageWidth,
//     $largeImageSize: imageWidth / 2,
//     $smallContainerSize: imageWidth / 2,
//     $smallImageSize: imageWidth / 4,

//     container: {
//         alignItems: 'center',
//     },
//     containerImage: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '$largeContainerSize',
//         height: '$largeContainerSize',
//     },
//     logo: {
//         width: '$largeImageSize',
//     },
//     text: {
//         fontWeight: '600',
//         fontSize: 28,
//         letterSpacing: -0.5,
//         marginTop: 15,
//         color: '$white'
//     },
//     text2: {
//         fontWeight: '600',
//         fontSize: 25,
//         letterSpacing: -0.5,
//         marginTop: -50,
//         color: '$schoolBlue'
//     },
// });





// Project Aergia

import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $largeContainerSize: imageWidth * 1.5,
    $largeImageSize: imageWidth * 1.5,
    $smallContainerSize: imageWidth,
    $smallImageSize: imageWidth,

    container: {
        alignItems: 'center',
        marginTop: -100,
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeContainerSize',
        height: '$largeContainerSize',
    },
    logo: {
        width: imageWidth * 1.5,
        marginTop: 0,
    },
    text: {
        fontWeight: '600',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        color: '$black'
    },
    text2: {
        fontWeight: 'bold',
        // textDecorationLine: 'underline',
        textShadowColor: '$black',
        // textShadowRadius: 1,
        fontFamily: 'monospace',
        fontSize: 30,
        letterSpacing: -0.5,
        marginTop: -100,
        color: '$schoolBlue'
    },
});