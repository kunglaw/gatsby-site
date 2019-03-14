import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout";
import SEO from "../components/seo"

class Counting  extends React.Component { 
    
    constructor() {
        super()
        this.state = {
            counter:0
        }
    }
    
    handleIncrement() {

        this.setState({
            counter:this.state.counter += 1
        })
    }

    handleDecrement() {
        this.setState({
            counter:this.state.counter -= 1
        })
    }

    render() {
        return (
            <Layout>
                <h1> Counter </h1>
                <hr></hr>
                <img alt="aaa" src="https://source.unsplash.com/random"></img>
                <h2> { this.state.counter } </h2>
                <button onClick={ () => { this.handleDecrement() } }> - </button>
                <button onClick={ () => { this.handleIncrement() } }> + </button>
            </Layout>
        )
    }
}

export default Counting