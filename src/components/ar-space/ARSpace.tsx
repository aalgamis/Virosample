import React from 'react';
import {
  ViroARSceneNavigator,
  ViroARScene,
  ViroText,
  // @ts-ignore
} from '@akadrimer/react-viro';

const TextScene = () => {
  const handleTracckingUpdate = () => {};
  return (
    <ViroARScene onTrackingUpdated={handleTracckingUpdate}>
      <ViroText text="TEST" scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} />
    </ViroARScene>
  );
};

const ARSpace = () => {
  return <ViroARSceneNavigator initialScene={{scene: TextScene}} />;
};

export default ARSpace;
