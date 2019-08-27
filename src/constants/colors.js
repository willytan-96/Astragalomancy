import { StyleType } from './types';

const Colors = {
  primaryColor: "#eb3434",
  primaryBorderColor: "#bf2222",

  secondaryColor: "#24a3d8",
  secondaryBorderColor: "#18abf1",

  disabledColor: "#928c8c",
  disabledBorderColor: "#797474",

  whiteColor: "#ffffff",
  blackColor: "black",
};

export const getColorByType = (styleType) => (
  styleType === StyleType.primary ? Colors.primaryBorderColor :
  styleType === StyleType.secondary ? Colors.secondaryBorderColor :
  Colors.blackColor
)

export default Colors;
