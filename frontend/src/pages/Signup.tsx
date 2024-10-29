import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const Signup = () => {
    return <div className="grid grid-cols-1 xl:grid-cols-2">
        <div>
            <Auth type="signup" />
        </div>
        
        <div>
            <Quote />
        </div>
    </div>
}