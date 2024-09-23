import { FC, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { UserInfoStateTypes } from "./SigninTypes";
import { BASE_URL } from "../../config/constants";

const SigninScreen: FC<any> = ({ navigation }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfoStateTypes>({
        email: "",
        password: "",
    });

    function pressHandler() {
        console.log("Move to Signup Screen");
        navigation.navigate("Signup");
    };

    function userInfoStateChangeHandler(key: keyof UserInfoStateTypes, text: string) {
        setUserInfo({
            ...userInfo,
            [key]: text,
        });
    };

    const signinHandler = async () => {
        try {
            setLoading(true);
            // API request to sign up the user
            const response = await fetch(BASE_URL + "/user/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            const data = await response.json();
            console.log("ashar data", data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setUserInfo({
                email: "",
                password: "",
            });
        }
    }

    return (
        <View style={styles.signupContainer}>
            <Input text="Email" value={userInfo.email} onChange={(text) => userInfoStateChangeHandler("email", text)} />
            <Input text="Password" value={userInfo.password} onChange={(text) => userInfoStateChangeHandler("password", text)} />
            <Pressable onPress={pressHandler}>
                <Text>Don't have an account? Sign Up</Text>
            </Pressable>
            <Button text="Sign In" style={styles.button} onClick={signinHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    signupContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
    },
    button: {
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: "50%",
        padding: 5,
        borderColor: "black",
    },
});

export default SigninScreen;