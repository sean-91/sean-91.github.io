import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { ClippedDrawer } from "./components/ClippedDrawer";
import { BlogPageInfo } from "./model/BlogPageInfo";
import { BlogPage } from "./components/BlogPage";

function App() {
  const pages: BlogPageInfo[] = [
    new BlogPageInfo("foo1", "bar1", "baz"),
    new BlogPageInfo("foo2", "bar2", "baz"),
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <ClippedDrawer pages={pages} />
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((page) => (
            <Route path={`/${page.path}`} element={<BlogPage {...page} />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
