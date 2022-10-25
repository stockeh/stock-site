import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import Button from 'react-bootstrap/Button';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Footer from './Footer';

import './Blogpage.css';

const MARKDOWN = 'source.md';

function Blogpage({ setNeedBanner, dir }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    setNeedBanner(false);
    import(`../assets/blogs/md/${dir}/${MARKDOWN}`).then((module) =>
      fetch(module.default)
        .then((res) => res.text())
        .then((text) => setContent(text))
    );
  }, [dir]);

  return (
    <div>
      <Link to='/blogs'>
        <Button id='blog-button'>
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <BsArrowLeft />
            &nbsp;Other Blogs
          </div>
        </Button>
      </Link>
      <ReactMarkdown
        className='react-markdown'
        children={content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[
          [
            rehypeKatex,
            {
              // TODO: fix this to anchor with react-router
              trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
              macros: {
                '\\eqref': '\\href{/###1}{\\text{Equation (#1)}}',
                '\\ref': '\\href{###1}{\\text{#1}}',
                '\\label': '\\htmlId{#1}{}',
              },
              strict: 'ignore',
            },
          ],
        ]}
        components={{
          img: ({ node, ...props }) => (
            // https://github.com/remarkjs/react-markdown/issues/265
            <img
              alt={node.properties.alt}
              style={{ maxWidth: '60%' }}
              src={require(`../assets/blogs/md/${dir}/${node.properties.src}`)}
            />
          ),
        }}
      />
      <Footer />
    </div>
  );
}

export default Blogpage;
