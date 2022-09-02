import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import Container from 'react-bootstrap/Container';

import Navigation from './Navigation';
import Footer from './Footer';

import './Blogpage.css';

const MARKDOWN = 'source.md';

function Blogpage({ dir }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../assets/blogs/md/${dir}/${MARKDOWN}`).then((module) =>
      fetch(module.default)
        .then((res) => res.text())
        .then((text) => setContent(text))
    );
  }, [dir]);

  return (
    <div>
      <Navigation />
      <Container fluid='sm'>
        <br />
        <br />
        <br />
        <br />
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[
            [
              rehypeKatex,
              {
                trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
                macros: {
                  '\\eqref': '\\href{###1}{\\text{Equation (#1)}}',
                  '\\ref': '\\href{###1}{\\text{#1}}',
                  '\\label': '\\htmlId{#1}{}',
                },
                strict: 'ignore',
              },
            ],
          ]}
          components={{
            img: ({ node, ...props }) => (
              //   console.log(`../assets/blogs/media/${node.properties.src}`),
              // https://github.com/remarkjs/react-markdown/issues/265
              <img
                alt={node.properties.alt}
                style={{ maxWidth: '60%' }}
                src={require(`../assets/blogs/md/${dir}/${node.properties.src}`)}
              />
            ),
          }}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default Blogpage;
