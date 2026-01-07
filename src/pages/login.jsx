import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("email", user.email);

            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            alert("Google login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Login</h2>

                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-3 border px-4 py-2 w-full rounded hover:bg-gray-100"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="w-5"
                    />
                    Continue with Google
                </button>
            </div>
        </div>
    );
}
