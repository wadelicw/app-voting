//  From node_modules
import Head from 'next/head';
import React from "react";

// From Components
import Campaign from "../components/Campaign/index.js";

class Home extends React.Component {
    render() {
        return (
            <div className=" main-container">
                <Head>
                    <title>Voting</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <nav className="navbar bg-info text-white">
                    <div className="container">
                        <p className="navbar-brand mb-0 h1">Vote For Fun</p>
                    </div>
            
                </nav>

                <main>
                    <div className="container">
                        <Campaign/>
                    </div>
                </main>

                <footer >
                    <div className="container">

                    </div>

                </footer>
            </div>
        )
    }
}

export default Home;
