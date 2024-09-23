import { FC, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { BASE_URL } from "../../config/constants";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SignupScreen: FC<any> = ({ navigation }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfoStateTypes>({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    function userInfoStateChangeHandler(key: keyof UserInfoStateTypes, text: string) {
        setUserInfo({
            ...userInfo,
            [key]: text,
        });
    };

    async function signUpHandler() {
        try {
            setLoading(true);
            const response = await fetch(BASE_URL + "/user/sign-up", {
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
                name: "",
                username: "",
                email: "",
                password: "",
            });
        }
    };

    function pressHandler() {
        console.log("Move to Signin Screen");
        navigation.navigate("Signin");
    };

    return (
        <View style={styles.signupContainer}>
            <Input text="Name" value={userInfo.name} onChange={(text) => userInfoStateChangeHandler("name", text)} />
            <Input text="Username" value={userInfo.username} onChange={(text) => userInfoStateChangeHandler("username", text)} />
            <Input text="Email" value={userInfo.email} onChange={(text) => userInfoStateChangeHandler("email", text)} />
            <Input text="Password" value={userInfo.password} onChange={(text) => userInfoStateChangeHandler("password", text)} />
            <Pressable onPress={pressHandler}>
                <Text>Already have an account? Sign In</Text>
            </Pressable>
            <Button text="Sign Up" style={styles.button} onClick={signUpHandler} />
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

export default SignupScreen;