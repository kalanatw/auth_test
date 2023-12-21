"use client";
import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title } = Typography;

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
};

const UserRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FieldType>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFinish = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        ...formData,
      });
      const token = response.data.token;
      alert("Registration successful!");
      router.push("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
        <Title level={2}>User Registration</Title>
        <Form
          name="registration"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
            hasFeedback
          >
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email address!",
              },
            ]}
          >
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserRegistration;
