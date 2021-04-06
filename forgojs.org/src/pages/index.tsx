import * as forgo from "forgo";
import Footer from "./components/Footer";
import Markdown from "./components/Markdown";
import TopBar from "./components/TopBar";
import * as fs from "fs";
import * as path from "path";
import renderToString from "forgo-ssr";
import layout from "./layouts/basic";

const content = fs.readFileSync(path.join(__dirname, "index/content.md"));

export function Index() {
  return {
    render() {
      return (
        <div>
          <TopBar />
          <div className="md:max-w-screen-md lg:max-w-screen-lg px-4 pt-4 m-auto">
            <h1 className="md:mt-8 pl-8 text-4xl font-bold">ForgoJS</h1>
            <div className="flex flex-wrap mb-8">
              <p style={{ paddingTop: "0.3em", paddingRight: "2em" }}>
                <img
                  alt="Forgo Logo"
                  src="/img/forgo.png"
                  className="md:mt-12"
                  style={{
                    width: "150px",
                    height: "150px",
                    float: "left",
                    borderRadius: "1em",
                  }}
                />
              </p>
              <div style={{ maxWidth: "360px" }}>
                <h2 className="text-2xl font-bold mt-8 mb-4 leading-tight">
                  Tiny UI runtime <br />
                  for modern web apps.
                </h2>
                <p className="mb-4">
                  Forgo is a 4KB library that makes it super easy to create
                  modern web apps using JSX (like React).
                </p>
                <p className="mb-4">
                  Unlike React, there are very few framework specific patterns
                  and lingo to learn. Everything you already know about DOM APIs
                  and JavaScript will easily carry over.
                </p>
              </div>
            </div>
            <Markdown src={content.toString()} />
          </div>
          <Footer />
        </div>
      );
    },
  };
}

export default function html() {
  return { html: layout(renderToString(<Index />)) };
}
