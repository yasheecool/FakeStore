import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default TodoItem = ({ id, title, description, deleteFn }) => {
  const [expanded, setExpanded] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <View style={styles.listItem}>
      <View style={styles.titleIcon}>
        <Text style={styles.title}>{title}</Text>

        <Button
          style={styles.button}
          onClickFn={() => setExpanded(!expanded)}
          iconName={
            expanded ? "caret-up-circle-outline" : "caret-down-circle-outline"
          }
        />
      </View>

      {expanded && (
        <View>
          <Text> {description}</Text>
          <View style={styles.iconContainer}>
            {!finished && (
              <Button
                onClickFn={() => setFinished(true)}
                iconName={"checkbox"}
                color={"green"}
              />
            )}

            <Button
              onClickFn={() => deleteFn(id)}
              iconName={"trash-sharp"}
              color={"red"}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontFamily: "Helvetica",
    backgroundColor: "#F4F4F4",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "column",
  },
  titleIcon: {
    flexDirection: "row",
    width: "100%",
  },
  title: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});
