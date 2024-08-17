import z from "zod"

const signUpSchema = z.object({
    name : z.string().optional(),
    email : z.string().email({message:"Please Provide a Valid Email address"}),
    password : z.string().min(8,{message : "Password is too short..."})
})

const signInSchema = z.object({
    email : z.string().email({message:"Please Provide a Valid Email address"}),
    password : z.string().min(8,{message : "Password is too short..."})
})

export {signUpSchema,signInSchema}