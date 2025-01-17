import { SignupInput } from "@garry_gs/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs );
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="min-w-fit">
                <div className="px-10">
                    <div className="text-center text-4xl font-extrabold">
                        {type === "signup" ? "Create an Account" : "Log in to account"}
                    </div>

                    <div className="text-center text-lg font-medium text-slate-500">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                        <Link className=" pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
                            {type === "signup" ? "Sign in" : "Sign up"}
                        </Link>
                    </div>
                </div>
                
                <div className="pt-8">

                    {type == "signup" 
                                && <LabelledInput label="Username" placeholder="John Doe" onChange={(e) => {
                                    setpostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    })
                                }} />
                    }

                    <LabelledInput label="Email" placeholder="john@email.com" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />

                    <LabelledInput label="Password" placeholder="Enter your password" type={"password"} onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />

                    <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type === "signup" ? "Sign up" : "Sign in" }
                    </button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType) {
    return <div>
    <label className="block mb-2 text-base font-semibold text-black pt-5">{label}</label>
    <input onChange={onChange} type={type || "text"} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}