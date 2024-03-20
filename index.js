import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const twMergeClassesWithBgColor = twMerge([
  "bg-[left_2em_bottom_9rem]",
  "md:bg-[right_2em_bottom_4.5rem]",
  "bg-red-500",
]);

const twMergeClassesWithoutBgColor = twMerge([
  "bg-[left_2em_bottom_9rem]",
  "md:bg-[right_2em_bottom_4.5rem]",
]);

const clsxClassesWithBgColor = clsx([
  "bg-[left_2em_bottom_9rem]",
  "md:bg-[right_2em_bottom_4.5rem]",
  "bg-red-500",
]);

console.log({
  twMergeClassesWithBgColor,
  twMergeClassesWithoutBgColor,
  clsxClassesWithBgColor,
  twMergeClassesWithBgNoRepeat,
});
