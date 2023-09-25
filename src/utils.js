import { nanoid } from "nanoid";
import arcadeIcon from "./assets/icon-arcade.svg";
import advancedIcon from "./assets/icon-advanced.svg";
import proIcon from "./assets/icon-pro.svg";

export const progressData = [
  { id: nanoid(), header: "step1", desc: "Your info" },
  { id: nanoid(), header: "step2", desc: "Select plan" },
  { id: nanoid(), header: "step3", desc: "Add-ons" },
  { id: nanoid(), header: "step4", desc: "Summary" },
];

export const plans = [
  {
    id: nanoid(),
    icon: arcadeIcon,
    title: "arcade",
    monthly_price: 9,
    yearly_price: 90,
  },

  {
    id: nanoid(),
    icon: advancedIcon,
    title: "advanced",
    monthly_price: 12,
    yearly_price: 120,
  },

  {
    id: nanoid(),
    icon: proIcon,
    title: "pro",
    monthly_price: 15,
    yearly_price: 150,
  },
];
