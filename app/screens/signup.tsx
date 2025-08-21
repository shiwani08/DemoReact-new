// app/signup.tsx
import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Button 
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library"; 
import styles from "../styles/signupStyle";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Camera + permissions
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [cameraOpen, setCameraOpen] = useState(false);
  const cameraRef = useRef<any>(null);

  if (!permission || !mediaPermission) {
    return <View />; // still loading
  }

  if (!permission.granted || !mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need camera & storage permission to continue
        </Text>
        <Button onPress={requestPermission} title="Grant Camera Permission" />
        <Button onPress={requestMediaPermission} title="Grant Storage Permission" />
      </View>
    );
  }

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    Alert.alert("Success", "You have signed up successfully!", [
      { text: "OK", onPress: () => router.replace("/") },
    ]);
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // save to local storage
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      Alert.alert("Photo Saved!", `Saved to gallery: ${asset.uri}`);
      setCameraOpen(false); 
    }
  };

  return (
    <View style={styles.container}>
      {!cameraOpen ? (
        <>
          <Text style={styles.title}>Sign Up</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Sign Up button */}
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Take Photo button */}
          <TouchableOpacity 
            style={[styles.button, { marginTop: 10 }]} 
            onPress={() => setCameraOpen(true)}
          >
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </>
      ) : (
        // Camera screen
        <CameraView style={{ flex: 1, width: "100%" }} facing={facing} ref={cameraRef}>
          <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
            <TouchableOpacity
              style={[styles.button, { alignSelf: "center" }]}
              onPress={takePhoto}
            >
              <Text style={styles.buttonText}>Capture</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { alignSelf: "center", marginTop: 10 }]}
              onPress={() => setFacing(f => (f === "back" ? "front" : "back"))}
            >
              <Text style={styles.buttonText}>Flip Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { alignSelf: "center", marginTop: 10 }]}
              onPress={() => setCameraOpen(false)}
            >
              <Text style={styles.buttonText}>Close Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}
