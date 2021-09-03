import React from "react";
import { FlatList, Divider, Image } from "native-base";
import { View, Text } from "react-native";
import moment from "moment";

//styles
import { styles } from "../styles/styles";

const Card = ({ newsData }) => {
  return (
    <FlatList
      data={newsData}
      renderItem={({ item }) => (
        <View>
          <View style={styles.newsContainer}>
            {item.image && (
              <Image
                width={550}
                height={250}
                resizeMode={"cover"}
                source={{
                  uri: item.image,
                }}
                alt={item.title}
              />
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>
              {moment(item.published_at).format("LLL")}
            </Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
          <Divider my={2} bg="#e0e0e0" />
        </View>
      )}
      keyExtractor={(item) => item.url}
    />
  );
};

export default Card;
