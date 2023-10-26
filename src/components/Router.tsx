import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { BlogPageInfo } from "../model/BlogPageInfo";
import { BlogPage } from "./BlogPage";

export interface RouterProps {
    pages: BlogPageInfo[],
}

export const Router = ({ pages }: RouterProps) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {pages.map(page => (
                <Route path={`/${page.path}`} element={<BlogPage {...page} />} />
            ))}
        </Routes>
    )
}