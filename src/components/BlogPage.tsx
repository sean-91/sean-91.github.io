import Box from "@mui/material/Box";
import { BlogPageInfo } from "../model/BlogPageInfo";
import Typography from "@mui/material/Typography";
import { ImageTable } from "./ImageTable";

export const BlogPage = (page: BlogPageInfo) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography paragraph>
                {page.text}
            </Typography>
            <ImageTable images={page.images} />
        </Box>
    )
}
