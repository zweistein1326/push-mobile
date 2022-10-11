import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import chest from "../../images/muscle_groups/chest.png";
import up from "../../images/icons/up.svg";
import down from "../../images/icons/down.svg";
import Svg, { Use, Image as ImageSVG, Circle, Polygon } from "react-native-svg";

const WorkoutScreen = ({ route, navigation }) => {
  const [activeWorkoutIndex, setActiveWorkoutIndex] = useState(0);
  const { workoutInfo } = route.params;
  const [activityInfo, setActivityInfo] = useState({});

  useEffect(() => {
    const workoutInfo = route.params.workoutInfo;
    const activityInfoWarmup = workoutInfo.workouts.warmup.map(
      (warmupWorkout) => ({
        ...warmupWorkout,
        userReps: warmupWorkout.reps,
        userWeight: warmupWorkout.weight_kg,
      })
    );
    setActivityInfo(activityInfoWarmup);
  }, [workoutInfo]);

  return (
    <View
      style={{
        backgroundColor: activeWorkoutIndex % 1 == 0 ? "#FFF" : "#000",
        height: "100%",
        paddingTop: 40,
      }}
    >
      {activeWorkoutIndex % 1 == 0 && (
        <View>
          <View style={{ marginVertical: 40 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 12,
              }}
            >
              {workoutInfo.workouts.warmup[activeWorkoutIndex].title}
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
                padding: 12,
              }}
            >
              {workoutInfo.workouts.warmup[activeWorkoutIndex].reps}x
            </Text>
          </View>
          <Image source={chest} style={{ width: "100%", height: 300 }} />
        </View>
      )}
      {activeWorkoutIndex % 1 !== 0 && (
        <View>
          <View style={{ marginVertical: 40 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 12,
                color: "#FFF",
              }}
            >
              {activityInfo[activeWorkoutIndex - 0.5].title}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: 12,
                  color: "#FFF",
                }}
              >
                Reps
              </Text>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFF",
                    width: 80,
                    height: 80,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {activityInfo[activeWorkoutIndex - 0.5].userReps}
                  </Text>
                </View>
                <View style={{ margin: 4, marginLeft: 12 }}>
                  <TouchableOpacity
                    style={{ backgroundColor: "transparent" }}
                    onPress={() => {
                      let new_activity_info = activityInfo;
                      new_activity_info[activeWorkoutIndex - 0.5].userReps =
                        parseInt(
                          new_activity_info[activeWorkoutIndex - 0.5].userReps
                        ) + 1;
                      setActivityInfo({ ...new_activity_info });
                    }}
                  >
                    <Svg width="30" height="30" viewBox="0 0 100 100">
                      <Polygon
                        points="50,25 0,100 100,100"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="white"
                      />
                    </Svg>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ backgroundColor: "transparent", marginTop: 10 }}
                    onPress={() => {
                      let new_activity_info = activityInfo;
                      new_activity_info[activeWorkoutIndex - 0.5].userReps =
                        parseInt(
                          new_activity_info[activeWorkoutIndex - 0.5].userReps
                        ) - 1;
                      setActivityInfo({ ...new_activity_info });
                    }}
                  >
                    <Svg width="30" height="30" viewBox="0 0 100 100">
                      <Polygon
                        points="0,0 100,0 50,75"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="white"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: 12,
                  color: "#FFF",
                }}
              >
                Weight
              </Text>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFF",
                    width: 80,
                    height: 80,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {activityInfo[activeWorkoutIndex - 0.5].userWeight}kg
                    {/* {count} */}
                  </Text>
                </View>
                <View style={{ margin: 4, marginLeft: 12 }}>
                  <TouchableOpacity
                    style={{ backgroundColor: "transparent" }}
                    onPress={() => {
                      let new_activity_info = activityInfo;
                      new_activity_info[activeWorkoutIndex - 0.5].userWeight =
                        parseInt(
                          new_activity_info[activeWorkoutIndex - 0.5].userWeight
                        ) + 1;
                      setActivityInfo({ ...new_activity_info });
                    }}
                  >
                    <Svg width="30" height="30" viewBox="0 0 100 100">
                      <Polygon
                        points="50,25 0,100 100,100"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="white"
                      />
                    </Svg>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ backgroundColor: "transparent", marginTop: 10 }}
                    onPress={() => {
                      let new_activity_info = activityInfo;
                      new_activity_info[activeWorkoutIndex - 0.5].userWeight =
                        parseInt(
                          new_activity_info[activeWorkoutIndex - 0.5].userWeight
                        ) - 1;
                      setActivityInfo({ ...new_activity_info });
                    }}
                  >
                    <Svg width="30" height="30" viewBox="0 0 100 100">
                      <Polygon
                        points="0,0 100,0 50,75"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="white"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      {/* BUTTONS */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingVertical: 20,
          paddingHorizontal: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginBottom: 20,
            backgroundColor: "#76FF73",
            height: 60,
            width: 180,
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
            setActiveWorkoutIndex(activeWorkoutIndex - 0.5);
          }}
        >
          <Text>&lt; Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginBottom: 20,
            backgroundColor: "#76FF73",
            height: 60,
            width: 180,
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
            if (activeWorkoutIndex == activityInfo.length - 1) {
              navigation.navigate("WorkoutSummary", { activityInfo });
            } else {
              setActiveWorkoutIndex(activeWorkoutIndex + 0.5);
            }
          }}
        >
          <Text>Next &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutScreen;
