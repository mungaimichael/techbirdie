
import { Container, Group, Text, Burger, Paper, Stack, Grid, Image, Center } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from "react"

const Home = () => {

    const [news, setNews] = useState(null);

    const [trending, setTrending] = useState(null);

    // get data
    const fetchNews = async (query = "technology") => {
        const { data: { results } } = await axios.get(
            'https://newsdata.io/api/1/news',
            {
                params: {
                    apikey: 'pub_190159f0e59d79ee2fce1307b9672b1155c83',
                    q: query,
                    country: 'gb,us',
                    language: 'en',
                    category: "technology"
                }
            }
        );
        return results;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNews("technology");
                const trending = await fetchNews("AI");
                setTrending(trending);
                setNews(data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container size="xl" >
            <Group
                position='center'
            >
                <Text
                    size="xl"
                    weight={"900"}
                    style={{ fontFamily: 'Poppins', fontSize: "2rem" }}
                    onClick={() => { console.log(news) }}
                >
                    Tech Birdie
                </Text>
                <Burger />
            </Group>
            <Container size="xl" >
                <Grid gutter={"lg"} >
                    <Grid.Col span={3}  >
                        <Stack spacing={"md"} >
                            {news && news.slice(0, 7).map((item, index) => {
                                return (
                                    <Paper shadow="xl" p="md" key={index} >
                                        <Text style={{ color: "lightblue" }} weight={"900"}  >{index}</Text>
                                        <Text weight={"700"}  >{item.title}</Text>
                                        <Group>
                                            <Text size='xs' style={{ color: "lightblue" }}>{item.pubDate}</Text>
                                            <Text size='xs' style={{ color: "lightblue" }} >{item.category[0]}</Text>
                                        </Group>
                                    </Paper>
                                )
                            })}
                        </Stack>
                    </Grid.Col  >
                    <Grid.Col span={7}   >
                        <Paper>
                            <Text
                                size="lg"
                                weight={"900"}
                                style={{ fontFamily: 'Poppins', fontSize: "1.5rem" }}
                                onClick={() => { console.log(news[0]) }}
                            >
                                {news && news[1].title}
                            </Text>
                            <Text>{news && news[0].description}</Text>
                            <Image url={news && news[0].image_url} alt="main story image" />
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={2}  >
                        <Stack spacing={"md"} >
                            {trending && trending.slice(0, 7).map((item, index) => {
                                return (
                                    <Paper shadow="xl" p="md" key={index} >
                                        <Text style={{ color: "lightblue" }} weight={"900"}  >{index}</Text>
                                        <Text weight={"700"}  >{item.title}</Text>
                                        <Group>
                                            <Text size='xs' style={{ color: "lightblue" }}>{item.pubDate}</Text>
                                            <Text size='xs' style={{ color: "lightblue" }} >{item.category[0]}</Text>
                                        </Group>
                                    </Paper>
                                )
                            })}
                        </Stack>
                    </Grid.Col  >
                </Grid>
            </Container>
        </Container>
    )
}

export default Home
