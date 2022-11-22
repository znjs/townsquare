import { facebookLogo, githubLogo, googleLogo, linkedinLogo } from "../assets";
import { LOGIN_BUTTON_TYPE } from "./types";

export const LOGIN_BUTTONS: LOGIN_BUTTON_TYPE[] = [
  {
    text: "Google",
    logo: googleLogo,
    btnBackground: "#5383EC",
    divBackground: "#ffffff",
    imgBackground: "#ffffff",
    altText: "Google Logo",
  },
  {
    text: "GitHub",
    logo: githubLogo,
    btnBackground: "#000000",
    divBackground: "#000000",
    imgBackground: "#000000",
    altText: "Github Logo",
  },
  {
    text: "Facebook",
    logo: facebookLogo,
    btnBackground: "#3875E9",
    divBackground: "#3875E9",
    imgBackground: "#3875E9",
    altText: "Facebook Logo",
  },
  {
    text: "LinkedIn",
    logo: linkedinLogo,
    btnBackground: "#0177B7",
    divBackground: "#0177B7",
    imgBackground: "#ffffff",
    altText: "LinkedIn Logo",
  },
];

export const CITIES: string[] = ["Hyderabad", "Bangalore", "Mumbai", "Pune", "Delhi", "Kolkata"];
