// Profile.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

interface formValues {
  name: string;
  email: string;
}

const Profile: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `http://localhost:4000/auth/user/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const data = response.data;
          setUser(data);
          form.setFieldsValue(data);
        } else {
          message.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [form]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/login");
  };

  const handleFormSubmit = async (formValues: any) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("/user/update", formValues, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        message.success("User data updated successfully");
      } else {
        // Handle error response
        message.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };


  return (
    <div style={{ maxWidth: 600, margin: "auto", paddingTop: 20 }}>
      <h1>Edit Profile</h1>
      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        initialValues={user?user:undefined}
      >
        <Form.Item name="name" label="Name">
          <Input disabled={!user} />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input disabled={!user} />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
