import React, { useState, useEffect, Suspense } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InfiniteScroll from "react-infinite-scroll-component";


class List extends React.Component {

    state = {
        items: Array.from({ length: 20 }, (v, k) => k + 1)
    };
    fetchMoreData = () => {
        this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }, (v, k) => k + 1 + this.state.items.length))
        });
    };
    render() {

        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.items.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        // pt: '56.25%',
                                    }}
                                    image={`http://assets.iotabots.io/${index + 1}.png`}
                                    alt="IOTABOT"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {`IOTABOT #${index + 1}`}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </InfiniteScroll>
            </>
        );
    };
};

export default List;