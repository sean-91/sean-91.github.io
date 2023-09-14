import Box from "@mui/material/Box";
import { BlogPageInfo } from "../model/BlogPageInfo";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const BlogPage = (page: BlogPageInfo) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography paragraph>
                {page.text}
            </Typography>
        </Box>
    )
}