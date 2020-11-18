import React from 'react'
import BoxService from '../components/BoxService'
import Layout from '../components/Layout'
import LayoutUser from '../components/LayoutUser'

const profile = () => {
    return (
        <Layout>
            <LayoutUser>
                <BoxService />
            </LayoutUser>
        </Layout>
    )
}

export default profile
