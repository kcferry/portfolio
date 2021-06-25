import React from 'react'
import {Helmet} from "react-helmet";

const MetaDecorator = ({image}) => {


    return (
        <Helmet>
            <meta property="og:title" content="Kyle Ferry Developer Portfolio"/>
            <meta property="og:site_name" content="Kyle Ferry Developer Portfolio"/>
            <meta property="og:url" content="https://www.kyleferry.dev/"/>
            <meta property="og:description" content="Website containing web development projects created by Kyle Ferry."/>
            <meta property="og:type" content='website'/>
            <meta property="og:image" content={image}/>
        </Helmet>
    )
}

export default MetaDecorator

