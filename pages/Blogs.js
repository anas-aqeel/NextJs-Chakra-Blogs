import React from "react";
import BlogCard from "../components/BlogCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react"

const Blogs = () => {
  return (
    <Box p={20}>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        {[1, 1, 1].map((e) => {
          return (
            <GridItem>
              <BlogCard />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Blogs;
