import React from 'react';
import { View, Platform } from 'react-native';
import { Styles } from './Styles';
import { SelectButton } from '../../components/SelectButton/SelectButton';
import { MyProgressBar } from '../../components/ProgressBar/ProgressBar';
import { UploadButton } from '../../components/UploadButton/UploadButton';
import * as ImagePicker from 'react-native-image-picker';
import { Constants } from '../../config/Constants';
import { FileDetails } from '../../components/FileDetails/FileDetails';

const RootScreen = () => {
  const [uploadProgress, setUploadProgess] = React.useState(0);
  const [file, setFile] = React.useState(null);

  const options = {
    mediaType: 'image/video',
  };

  const handleChoosePhoto = async () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFile(response);
        setUploadProgess(0);
      }
    });
  };

  handleProgress = (event) => {
    setUploadProgess(event.loaded / event.total);
  };

  const handleUpload = () => {
    if (file === null) {
      alert('Please select a file');
    } else {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('file', {
        uri:
          Platform.OS === 'ios'
            ? file['assets'][0]['uri'].replace('file://', '')
            : file['assets'][0]['uri'],
        name: `${file['assets'][0]['fileName']}`,
        type: `${file['assets'][0]['type']}`,
      });

      xhr.upload.addEventListener('progress', handleProgress);
      xhr.open('POST', `${Constants.baseURL}/api/v0/add`);
      console.log('OPENED', xhr.status);

      xhr.onprogress = function () {
        console.log('LOADING', xhr.status);
      };

      xhr.onload = function () {
        if (xhr.status === 200) {
          alert('File Uploaded Sucessfully');
          setFile(null);
        } else {
          alert('Failed to upload file');
          setUploadProgess(uploadProgress);
        }
      };

      xhr.send(formData);
    }
  };

  return (
    <View style={Styles.Container}>
      {file == null ? null : <FileDetails file={file} />}
      <SelectButton handleChoosePhoto={handleChoosePhoto} />
      <MyProgressBar progress={uploadProgress} />
      <UploadButton handleUpload={handleUpload} />
    </View>
  );
};
export default RootScreen;
