import { atom } from "recoil";

export const nameAtom = atom({
    key : "nameAtom",
    default : "Unkown"
})

export const emailAtom = atom({
    key : "emailAton",
    default : ""
})

export const passwordAtom = atom({
    key : "passwordAtom",
    default : ""
})