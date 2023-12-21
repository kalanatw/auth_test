"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToSignup = () => {
    router.push("/signup");
  };
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button type="primary" onClick={navigateToLogin}>
        Go to Login
      </Button>
      <Button type="primary" onClick={navigateToSignup}>
        Go to Signup
      </Button>
    </div>
  );
}
