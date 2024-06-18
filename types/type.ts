import { UserRole } from "@prisma/client"
import { StringToBoolean } from "class-variance-authority/types"

export type ServiceProps = {
    title: string, image: string, slug:string
}

export type RegisterInputProps = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    role: UserRole
}

export type LoginInputProps = {
    email: String,
    password: string,
}