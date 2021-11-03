import Head from "next/head";

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>
                    DevBook | {title}
                </title>
            </Head>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;