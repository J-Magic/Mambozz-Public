import { Image } from 'react-native';
import { ComponentProps } from 'react';
import { Buffer } from 'buffer';

const bucket = 'mambozzfff38c8aac16441493f50f29c95c15bc71645-dev';
const URL = 'https://d1yhl35ugt4c0g.cloudfront.net/';

type SmartImageProps = {
  imgKey: string | null | undefined;
} & Omit<ComponentProps<typeof Image>, 'source'>;

export default function SmartImage({ imgKey, ...imageProps }: SmartImageProps) {
  const imageRequest = JSON.stringify({
    bucket,
    key: imgKey,
    edits: {
      resize: {
        width: 100,
        height: 100,
        fit: 'cover',
      },
    },
  });

  const encoded = Buffer.from(imageRequest).toString('base64');

  return <Image source={{ uri: URL + encoded }} {...imageProps} />;
}

// export default SmartImage
