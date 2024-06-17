import { StringToBoolean } from "class-variance-authority/types"

export type ServiceProps = {
    title: string, image: string, slug:string
}

export type RegisterInputProps = {
    name: string,
    email: String,
    password: string,
    confirmPassword: string
}

export type LoginInputProps = {
    email: String,
    password: string,
}