import React from 'react';
import { ChakraProvider, Grid, Box, Image, Link, Text } from '@chakra-ui/react'

class AllCourses extends React.Component {
    courseData = {
        data: []
    }

    componentDidMount() {
        fetch('https://jumpstartbackendd.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => {
                this.courseData.data = data;
                console.log(data);
                this.forceUpdate();
            })
        localStorage.setItem('appState', JSON.stringify(this.state));
    }

    render() {
        // go through data and render a card for each course
        return (
            <ChakraProvider>
                <div mt={15}>
                    {this.courseData.data.map(course => {
                        return (
                            // add border
                            <Link href={'/Courses/' + course.courseCode} >
                                <Box borderWidth="1px" borderColor="gray.200" borderRadius="lg" p={4} display={{ md: 'flex' }}>
                                        <Box flexShrink={0}>
                                            <Image
                                                borderRadius='lg'
                                                width={{ md: 69 }}
                                                src={course.courseImage}
                                                alt=''
                                            />
                                        </Box>
                                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                                            <Text
                                                mt={1}
                                                display='block'
                                                fontSize='lg'
                                                lineHeight='normal'
                                                fontWeight='semibold'
                                                href={'/Courses/' + course.courseCode}
                                            >
                                                {course.courseName} ({course.courseCode})
                                            </Text>

                                            <Text mt={2} color='gray.500'>
                                                {course.courseDescription}
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

export default AllCourses;
