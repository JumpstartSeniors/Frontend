import React from "react";
import { useParams } from "react-router-dom";
import {
  ChakraProvider,
  Grid,
  Box,
  Image,
  Link,
  Text,
  Input,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
// create a function that gets the current url
function getCurrentUrl() {
  let url = window.location.href;
  let urlArray = url.split("/");
  return urlArray[4];
}

class CourseNotes extends React.Component {
  courseNotes = {
    data: [],
  };

  componentDidMount() {
    const url =
      "https://jumpstartbackendd.herokuapp.com/notes/" + getCurrentUrl();
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.courseNotes.data = data;
        console.log(getCurrentUrl());
        console.log(data);
        this.forceUpdate();
      });
    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  render() {
    return (
      <ChakraProvider>
        {/* <Text 
        mt={2}
        ml={2} 
        display="block"
        fontSize="lg"
        lineHeight="normal"
        fontWeight="semibold"
        >
            Search Notes:
        </Text>
        <Input 
        m={2} 
        placeholder="Study Sheet...." 
        onSubmit={() => {
            console.log("CHECK")
        }}
        /> */}
        <div mt={15}>
          {this.courseNotes.data.map((note) => {
            return (
              // add border
              <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={4}
                display={{ md: "flex" }}
              >
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <Link href={note.source}>
                    <Text
                      mt={1}
                      display="block"
                      fontSize="lg"
                      lineHeight="normal"
                      fontWeight="semibold"
                    >
                      {note.title}
                    </Text>

                    <Text mt={2} color="gray.500">
                      Date Posted: {note.datePosted}
                    </Text>
                    <Text mt={2} color="gray.1000">
                      {note.description}
                    </Text>
                  </Link>
                  <Text mt={2} color="gray.500">
                    Likes: {note.likes}
                    <Button
                      type="button"
                      variantColor="blue"
                      variant="outline"
                      ml={2}
                      size="sm"
                      icon={<ChevronUpIcon />}
                      // make sure this onclick doesnt go more then twice
                      onClick={() => {
                        const url =
                          "https://jumpstartbackendd.herokuapp.com/notes/like/" +
                          note._id;

                        fetch(url, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                        })
                          .then((res) => res.json())
                          .then((data) => {
                            console.log(data);
                            this.forceUpdate();
                            window.location.reload();
                        });
                      }}
                    >
                      Upvote
                    </Button>
                  </Text>
                </Box>
              </Box>
            );
          })}
        </div>
      </ChakraProvider>
    );
  }
}

export default CourseNotes;
