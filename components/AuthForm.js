import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Space, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Text } = Typography;

const AuthForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const validateUsername = (rule, value) => {
        return new Promise(async (resolve, reject) => {
            if (!value) {
                await reject("Password must be entered");
            } else if (!/admin@admin.com/gm.test(value)) {
                await reject("Логин неверный");
            } else {
                await resolve();
            }
        });
    };
    const validatePassword = (rule, value) => {
        return new Promise(async (resolve, reject) => {
            if (!value) {
                await reject("Password must be entered");
            } else if (!/admin/gm.test(value)) {
                await reject("Пароль неверный");
            } else if (value.length > 5) {
                await reject("Пароль неверный");
            } else {
                await resolve();
            }
        });
    };
    useEffect(() => {
        forceUpdate({});
    }, []);

    return (
        <>
            <Row justify="center" align="middle">
                <Col span={12}>
                    <Title>Войти</Title>
                    <Form
                        form={form}
                        name="normal_login"
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                    validator: validateUsername,
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                    validator: validatePassword,
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form
                                            .getFieldsError()
                                            .filter(
                                                ({ errors }) => errors.length
                                            ).length
                                    }
                                    block
                                >
                                    <Link href="/">Войти</Link>
                                </Button>
                            )}
                        </Form.Item>
                        <Space direction="vertical">
                            <Text>Если вы не имеете аккаунта</Text>
                            <a href="">Зарегистрируйтесь</a>
                        </Space>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default AuthForm;
