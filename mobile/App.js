import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Routes />
        <StatusBar style="auto" />
      </>
    );
  }
}
