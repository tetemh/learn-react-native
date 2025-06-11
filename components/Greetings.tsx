import React from "react";
import { Text, View } from "react-native";

type GreetingsProps = {
  name: React.ReactNode;
};

export default function Greetings({ name }: GreetingsProps) {
  return (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 36
      }}
    >
      Greeting {name}
    </Text>
  );
}