import React, {useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Text, Icon, Div, Button, Modal, ScrollDiv} from 'react-native-magnus';
import ARSpace from '../../components/ar-space/ARSpace';

interface Props {
  componentId: string;
  name: string;
}

const HomePage: NavigationFunctionComponent<Props> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(value => !value);
    // if (drawerRef.current) {
    //   drawerRef.current.open();
    // }
  };

  const renderCardItem = () => (
    <Button block color="white" p="none" mt="lg" onPress={handleShowModal}>
      <Div
        p="lg"
        flex={1}
        bgImg={{
          uri:
            'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        }}>
        <Text color="white" fontSize="3xl" fontWeight="bold">
          Landscape
        </Text>
        <Text color="white" fontSize="sm" mt="sm" opacity={0.9}>
          Different landscapes painting from all over the world
        </Text>
        <Div row justifyContent="space-between">
          <Div row mt="xl" alignSelf="center">
            <Text color="white">More</Text>
            <Icon name="arrowright" color="white" ml="md" />
          </Div>
          <Div mt="xl">
            <Button bg="red100" h={30} w={30} rounded="circle">
              <Icon name="heart" color="red700" />
            </Button>
          </Div>
        </Div>
      </Div>
    </Button>
  );

  return (
    <ScrollDiv px="xl">
      <Text
        mt="lg"
        fontSize="lg"
        fontWeight="bold"
        textTransform="uppercase"
        color="gray900"
        letterSpacing={2}>
        App home page
      </Text>

      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}
      {renderCardItem()}

      <Modal isVisible={isModalVisible}>
        <Div flex={1} justifyContent="center">
          <ARSpace />
        </Div>
        <Button
          bg="gray400"
          h={35}
          w={35}
          position="absolute"
          top={50}
          right={15}
          rounded="circle"
          onPress={handleShowModal}>
          <Icon color="black" name="close" />
        </Button>
      </Modal>
      {/* <Drawer ref={drawerRef} drawerPercentage={100} /> */}
    </ScrollDiv>
  );
};

export default HomePage;
