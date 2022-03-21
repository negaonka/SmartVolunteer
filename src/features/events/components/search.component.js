import React, { useContext } from "react";
import { SearchBar } from "react-native-screens";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding: 10px 70px;
  background-color: lightblue;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <View>
        <Searchbar placeholder="Search" />
      </View>
    </SearchContainer>
  );
};
