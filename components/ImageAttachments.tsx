import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ImageView from 'react-native-image-viewing';
import { AttachmentType } from '@/src/API';

type newChatAttachment = {
  __typename: 'ChatAttachment';
  id: string;
  chatMessageID?: string | null;
  chatRoomID?: string | null;
  storageKey: string;
  type: AttachmentType;
  width?: number | null;
  height?: number | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
  uri: string;
};
// const ImageAttachments = ( attachments: (newChatAttachment | null)[]) => {
const ImageAttachments = (props: any) => {
  const { attachments } = props;
  console.log('Attachments from ImageAttachments: ', attachments);

  const [imageViewerVisible, setImageViewerVisible] = useState<boolean>(false);

  return (
    <>
      {attachments.map((attachment: newChatAttachment) => (
        <TouchableOpacity
          key={attachment?.id}
          style={[
            styles.imageContainer,
            attachments.length === 1 && { flex: 1 },
          ]}
          onPress={() => setImageViewerVisible(true)}
        >
          <Image source={{ uri: attachment?.uri }} style={styles.image} />
        </TouchableOpacity>
      ))}

      <ImageView
        // images={attachments.map((attachment: newChatAttachment) => {
        //   const imgUri = attachment?.uri;
        //   if (imgUri) {
        //     console.log('IMAGE URI FROM IMAGE ATTACHMENTS: ', imgUri);
        //     return { imgUri };
        //   }
        // })}
        images={attachments.map(({ uri }) => ({ uri }))}
        imageIndex={0}
        visible={imageViewerVisible}
        onRequestClose={() => setImageViewerVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: '50%',
    aspectRatio: 1,
    padding: 3,
  },
  image: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
});
export default ImageAttachments;
