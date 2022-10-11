import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import calories from "../../images/icons/calories.png";
import time from "../../images/icons/time.png";
import workouts from "../../images/icons/workouts.png";
import chest from "../../images/muscle_groups/chest.png";

const WorkoutSummary = ({ route, navigation }) => {
  const { activityInfo } = route.params;
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "100%",
        width: "100%",
        paddingVertical: 50,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontStyle: "italic",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Workout Summary
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 12,
          marginTop: 24,
        }}
      >
        <View>
          <Text
            style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
          >
            Calories Burnt
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", height: 40 }}
          >
            <Image
              source={calories}
              style={{ height: 30, width: 30, marginRight: 8 }}
            />
            <Text
              style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
            >
              700 KCal
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
          >
            Time spent
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", height: 40 }}
          >
            <Image
              source={time}
              style={{ height: 30, width: 30, marginRight: 8 }}
            />
            <Text
              style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
            >
              1hr 30mins
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
          >
            Workouts
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", height: 40 }}
          >
            <Image
              source={workouts}
              style={{ height: 30, width: 30, marginRight: 8 }}
            />
            <Text
              style={{ fontSize: 16, textAlign: "center", fontWeight: "500" }}
            >
              32
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 12,

          maxHeight: "70%",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
          Workouts
        </Text>
        <FlatList
          data={activityInfo}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRadius: 10,
                  overflow: "hidden",
                  marginVertical: 8,
                }}
              >
                <Image
                  source={chest}
                  style={{ height: 60, width: 60, marginRight: 20 }}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontSize: 16 }}>{item.title}</Text>
                  <Text style={{ fontSize: 16 }}>{item.userReps}x</Text>
                  <Text style={{ fontSize: 16 }}>{item.userWeight}kg</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            width: "80%",
            paddingVertical: 20,
            borderRadius: 50,
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 16, textAlign: "center" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutSummary;
