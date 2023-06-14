import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';

const ImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Dozvola za pristup kameri je potrebna!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
  };

  const handleUploadImage = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      try {
        const response = await axios.post(myUrl + "/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data); // Ovde možete obraditi odgovor sa servera
        alert("Uspesno ste uneli fotografiju.")
      } catch (error) {
        alert("Problem sa unosenjem fotografije.")
        console.error(error);
      }
    }
  };

  return (
    <View>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage.uri }}
          style={{ width: 200, height: 200, marginVertical:7 }}
        />
      )}
      <Button title="Odaberi sliku" onPress={handleChooseImage} />
      <Button title="Upload Image" onPress={handleUploadImage} />
    </View>
  );
};

export default ImgUpload;