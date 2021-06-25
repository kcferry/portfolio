import React from 'react'
import { Helmet } from "react-helmet";

const metaData = require("../meta/metaData.json")

const MetaDecorator = ({ image }) => {


    return (
        <Helmet>
            <title>Kyle Ferry Portfolio</title>
            <meta name="description" content="Website containing web development projects created by Kyle Ferry"> </meta>
            <meta property="og:title" content="Kyle Ferry Developer Portfolio"> </meta>
            <meta property="og:url" content={metaData.hostname}> </meta>
            <meta property="og:description" content="Website containing web development projects created by Kyle Ferry."> </meta>
            <meta property="og:type" content='website'> </meta>
            <meta property="og:image" content={metaData.hostname + image}> </meta>
        </Helmet>
    )
}

export default MetaDecorator

