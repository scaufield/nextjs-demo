import Head from "next/head";
import React from "react";
import AuthForm from "../components/AuthForm";
import SelectLanguage from "../components/SelectLanguage";

export default function Auth() {
    return (
        <>
            <Head>
                <meta
                    key="title"
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <title>Войти</title>
            </Head>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <SelectLanguage />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "100vh",
                    textAlign: "center",
                    flexDirection: "column",
                }}
            >
                <AuthForm />
            </div>
        </>
    );
}
