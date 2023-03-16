import { Container, Group, Text, Burger } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import useData from '../../hooks/useData'
import fetchNews from '../../services/fetchNews.api'

const Home = () => {
    // const { data } = useData()
    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    return (
        <>
            <Container>
                <Group
                    position='center'
                >
                    <Text
                        size="xl"
                        weight={"900"}
                        style={{ fontFamily: 'Poppins', fontSize: "2rem" }}
                    >
                        Tech Birdie
                    </Text>
                    <Burger />
                </Group>
            </Container>

            <Container>
                THiis si the main content
            </Container>
        </>
    )
}

export default Home