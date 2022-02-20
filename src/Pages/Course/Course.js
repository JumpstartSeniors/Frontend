import React from 'react';
import { useParams } from "react-router-dom";
import { ChakraProvider, Grid, Box, Image, Link, Text } from '@chakra-ui/react'

// create a function that gets the current url
function getCurrentUrl() {
    let url = window.location.href;
    let urlArray = url.split('/');
    return urlArray[4];
}

class CourseNotes extends React.Component {
    courseNotes = {
        data: []
    }


    componentDidMount() {
        const url = 'http://localhost:8080/courses/' + getCurrentUrl();
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.courseNotes.data = data;
                console.log(getCurrentUrl());
                console.log(data);
                this.forceUpdate();
            })
    }

    render() {
        return (
            <ChakraProvider>
                <div mt={15}>
                    {this.courseNotes.data.map(note => {
                        return (
                            // add border
                            <Link href={note.source} >
                                <Box borderWidth="1px" borderColor="gray.200" borderRadius="lg" p={4} display={{ md: 'flex' }}>
                                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                                        <Text
                                            mt={1}
                                            display='block'
                                            fontSize='lg'
                                            lineHeight='normal'
                                            fontWeight='semibold'
                                        >
                                            {note.title}
                                        </Text>

                                        <Text mt={2} color='gray.500'>
                                            Date Posted: {note.datePosted}
                                        </Text>
                                        <Text mt={2} color='gray.1000'>
                                            {note.description}
                                        </Text>
                                    </Box>
                                </Box>
                            </Link>
                        )
                    })}
                </div>
            </ChakraProvider>
        )
    }
}

export default CourseNotes;
