import React from "react";
import {
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Text } from "../../components/text";
import { NavigationNames } from "../../navigations";
import styles from "./styles";

interface Props {
  navigation: any;
}

const LandingPage = (props: Props) => {
  const iconsData = [
    {
      title: "House Match",
      image: require("../../../assets/landing_screen_assets/house-match.png"),
    },
    {
      title: "Credit Road Map",
      image: require("../../../assets/landing_screen_assets/credit-road-map.png"),
    },
    {
      title: "Piggy Bank",
      image: require("../../../assets/landing_screen_assets/piggy-bank.png"),
    },
    {
      title: "Ask an Expert",
      image: require("../../../assets/landing_screen_assets/ask-an-expert.png"),
    },
    {
      title: "Design Game",
      image: require("../../../assets/landing_screen_assets/design-game.png"),
    },
  ];

  const onMenuPressed = (item) => {
    if (item.title === iconsData[0].title) {
      props.navigation.navigate(NavigationNames.RootLoginScreen);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      <View>
        <View style={styles.imageHorizontalContainer}>
          <TouchableOpacity
            onPress={() => {
              onMenuPressed(iconsData[0]);
            }}
          >
            <Image source={iconsData[0].image} style={styles.menuIconImage} />
          </TouchableOpacity>

          <Image source={iconsData[1].image} style={styles.menuIconImage} />
        </View>

        <Image
          source={iconsData[2].image}
          style={[styles.menuIconImage, { alignSelf: "center" }]}
        />

        <View style={styles.imageHorizontalContainer}>
          <Image source={iconsData[3].image} style={styles.menuIconImage} />
          <Image source={iconsData[4].image} style={styles.menuIconImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LandingPage;
