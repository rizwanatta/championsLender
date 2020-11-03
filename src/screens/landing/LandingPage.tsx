import { Octicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Text } from "../../components/text";
import { NavigationNames } from "../../navigations";
import styles from "./styles";

interface Props {
  navigation: any;
}

const LandingPage = (props: Props) => {
  const iconsData = [
    { title: "House Match", icon: "home" },
    { title: "Credit Road Map", icon: "milestone" },
    { title: "Piggy Bank", icon: "gist-secret" },
    { title: "Ask an Expert", icon: "person" },
    { title: "Design Game", icon: "play" },
  ];

  const onMenuPressed = (item) => {
    if (item.title === iconsData[0].title) {
      props.navigation.navigate(NavigationNames.RootLoginScreen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.headerBgImage}
          source={require("../../../assets/header_bg.jpg")}
        >
          <View style={styles.headerOpacityContainer}>
            <Image
              source={require("../../../assets/logo.png")}
              resizeMode="center"
              style={{
                width: 200,
                height: 150,
              }}
            />
            <Text style={styles.logoSaying}>Champion Lender</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>TIP OF THE DAY</Text>
        <View style={styles.tipSayingContainer}>
          <Text style={styles.tipText}>
            Refinance your mortgage, explore your options to refinance to get a
            lower interest rate which could save you thousands
          </Text>
        </View>
      </View>

      <FlatList
        data={iconsData}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onMenuPressed(item)}
            style={styles.menuIconContainer}
          >
            <Octicons name={item.icon} color="white" size={50} />
            <Text style={styles.menuIconLabel}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LandingPage;
