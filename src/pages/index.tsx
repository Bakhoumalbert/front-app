import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Coder Albert</title>
                <meta name="description" content="description..." />
            </Head>
            <h1 className="text-3xl font-bold underline text-red-500">
                Hello world!
            </h1>
        </>
    );
}