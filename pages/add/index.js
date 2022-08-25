import React, { useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import Router from "next/router";
import CustomerData from "../../services/customer";

const AddUser = () => {
  const styledInput = {
    padding: "10px",
  };
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    form.resetFields();
    try {
      setIsLoading(true);
      await CustomerData.addcustomers(values);
      message.success("User Added Successfully");
    } catch (error) {
      setIsLoading(true);
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div style={{ background: "#ede7e6", height: "100vh", width: "100%" }}>
        <div
          style={{ padding: "20px" }}
          onClick={() => {
            Router.push("/");
          }}
        >
          <Button type="secondary">GO to Home</Button>
        </div>
        <div style={{ height: "50vh", width: "60%" }}>
          <h2 style={{ textAlign: "center" }}>Add User</h2>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input style={styledInput} />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input style={styledInput} />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input style={styledInput} />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input style={styledInput} />
            </Form.Item>
            {isLoading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Spin size="large" />
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button htmlType="submit" type="primary">
                  Add User
                </Button>
              </div>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
