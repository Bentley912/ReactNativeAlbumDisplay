import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//receive props from parent
const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                     style={styles.thumbnailStyle} 
                    source={{ uri: props.album.thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContentStyles}> 
                    <Text style={styles.headerTextStyles}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                 </View>
            </CardSection>
            <CardSection>  
                    <Image 
                        style={styles.artworkStyles}
                        source={{ uri: props.album.image }}
                    />      
            </CardSection>
            <CardSection>
                <Button whenClicked={() => Linking.openURL(props.album.url)} >
                    Buy Now 
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyles: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artworkStyles: {
        height: 300,
        flex: 1,
        width: null
    },
};
export default AlbumDetail;
