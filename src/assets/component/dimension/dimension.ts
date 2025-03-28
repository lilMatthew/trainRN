import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const dimension = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    ITEM_WIDTH: width * 0.9,
    ITEM_HEIGHT: 100,
}