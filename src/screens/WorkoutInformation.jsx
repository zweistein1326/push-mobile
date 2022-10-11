import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import chest from "../../images/muscle_groups/chest.png";
import { workoutInfo } from "../utils/workoutInfoDummy";

const WorkoutInformation = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%", paddingTop: 40 }}>
      {/* <Image
        source={chest}
        style={{ width: "100%", height: "40%", margin: 0 }}
      /> */}
      <View style={{ padding: 8, margin: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Workout 14th October, 2022
        </Text>
      </View>
      {/* <Text>This Screen shows all current workout inforamtion</Text> */}
      <View
        style={{
          marginHorizontal: 8,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {workoutInfo.goals.map((goal, index) => {
          return (
            <View style={{ paddingTop: 4 }}>
              <Text style={{ fontSize: 16 }}>
                {goal.title}{" "}
                <Text
                  style={{
                    fontSize: 16,
                    color: goal.change > 0 ? "#0CBC09" : "red",
                  }}
                >
                  {goal.change > 0 ? `+${goal.change}` : goal.change}%
                </Text>
              </Text>
            </View>
          );
        })}
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 8,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {workoutInfo.muscle_groups.map((muscle_group, index) => {
          return (
            <View style={{ paddingTop: 4 }}>
              <Text style={{ fontSize: 16 }}>{muscle_group} </Text>
            </View>
          );
        })}
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 8,
          height: "70%",
          overflow: "hidden",
        }}
      >
        <FlatList
          data={workoutInfo.workouts.warmup}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  shadowColor: "gray",
                  shadowRadius: 10,
                  shadowOpacity: 0.2,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 4,
                  marginTop: 12,
                }}
              >
                <Image
                  source={chest}
                  style={{
                    height: 80,
                    width: 80,
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                  }}
                />
                <View
                  style={{
                    marginHorizontal: 8,
                    marginVertical: 4,
                    padding: 8,
                    flexDirection: "column",
                  }}
                >
                  <Text style={{}}>{item.title}</Text>
                  <Text style={{}}>{item.reps}x</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginBottom: 20,
            backgroundColor: "#76FF73",
            height: 60,
            width: 240,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 48,
            shadowColor: "gray",
            shadowRadius: 10,
            shadowOpacity: 0.3,
            margin: 4,
            marginTop: 12,
          }}
          onPress={() => {
            navigation.setParams({ workoutInfo });
            navigation.navigate("WorkoutScreen", { workoutInfo });
          }}
        >
          <Text style={{ fontSize: 16 }}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutInformation;
