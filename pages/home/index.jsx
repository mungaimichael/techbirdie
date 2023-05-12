
import { Container, Group, Text, Burger, Paper, Stack, Grid, Image, Center } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from "react"

const Home = () => {

    const [news, setNews] = useState(null);

    const [trending, setTrending] = useState(null);

    const [mainStory, setMainStory] = useState(null);


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
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomElement = data[randomIndex];

                // Update the mainStory state with the random element
                setMainStory(randomElement);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container size="xl" >
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
                            <Image
                                src={news && mainStory.image_url}
                                alt={mainStory && mainStory.image_url ? "main story image" : "image not available"}
                                onClick={() => { console.log(mainStory) }}
                                sx={{ marginTop: "2rem" }}
                            />
                            <Text
                                size="lg"
                                weight={"900"}
                                style={{ fontFamily: 'Poppins', fontSize: "1.5rem" }}
                            >
                                {news && mainStory.title}
                            </Text>
                            <Text
                            >{news && mainStory.description}</Text>

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
        </Container >
    )
}

export default Home
