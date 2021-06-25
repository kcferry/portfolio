import React from 'react'
import { Helmet } from "react-helmet";

const metaData = require("../meta/metaData.json")

const MetaDecorator = ({ image }) => {


    return (
        <Helmet>
            <title>Kyle Ferry</title>
            <meta name="description" content="Website containing web development projects created by Kyle Ferry" />
            <meta property="og:title" content="Kyle Ferry Developer Portfolio" />
            <meta property="og:url" content={metaData.hostname + window.location.pathname + window.location.search} />
            <meta property="og:description" content="Website containing web development projects created by Kyle Ferry." />
            <meta property="og:type" content='website' />
            <meta property="og:image" content={metaData.hostname + image} />
        </Helmet>
    )
}

export default MetaDecorator

