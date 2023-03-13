import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

import Button from 'react-bootstrap/Button';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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

  const generateSlug = (string) => {
    let str = string.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return str;
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className='blog-page'>
      <Link to='/blogs'>
        <Button id='blog-button'>
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <BsArrowLeft />
            &nbsp;Other Blogs
          </div>
        </Button>
      </Link>
      <br />
      {/* <HashLink to={'/blogs/' + dir + '#yourAnchorTag'}>Jump to someheader</HashLink> */}
      <ReactMarkdown
        className='react-markdown'
        children={content}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[
          [
            rehypeKatex,
            {
              // TODO: fix this to anchor with react-router
              trust: (context) => ['\\htmlId'].includes(context.command),
              macros: {
                '\\label': '\\htmlId{#1}{}',
              },
              strict: 'ignore',
            },
          ],
        ]}
        components={{
          img: ({ node, ...props }) => {
            // https://github.com/remarkjs/react-markdown/issues/265
            const alt = node.properties.alt.includes('|')
              ? node.properties.alt.split('|')
              : [node.properties.alt];

            let width = 50;
            if (alt.length > 1) {
              width = alt[1];
            }
            return (
              <img
                className='inline-image'
                alt={alt[0]}
                id={alt[0]}
                style={{ maxWidth: `${width}%` }}
                src={require(`../assets/blogs/md/${dir}/${node.properties.src}`)}
              />
            );
          },
          a: ({ node, ...props }) => {
            if (props.href.charAt(0) == '!') {
              // markdown: [test](!some-id)
              props.href = '#' + props.href.substring(1); // '/blogs/' + dir +
              return <HashLink to={props.href} scroll={scrollWithOffset} {...props} />;
            }
            // else if (props.href.charAt(0) == '#') {
            //   // markdown: [1](#some-ref)
            //   props.children = '[' + props.children + ']';
            //   return <span id={props.href.substring(1)} {...props} />;
            // }
            return <a target='_blank' rel='noopener noreferrer' {...props} />;
          },
          //   span: ({ node, ...props }) => {
          //     console.log(props);
          //     return <span {...props} />;
          //   },
          h1: ({ node, ...props }) => <h1 id={generateSlug(props.children[0])} {...props} />,
          h2: ({ node, ...props }) => (
            <h2 className='blog-title' id={generateSlug(props.children[0])} {...props} />
          ),
          h3: ({ node, ...props }) => <h3 id={generateSlug(props.children[0])} {...props} />,
          h4: ({ node, ...props }) => <h4 id={generateSlug(props.children[0])} {...props} />,
          h5: ({ node, ...props }) => <h5 id={generateSlug(props.children[0])} {...props} />,
          h6: ({ node, ...props }) => <h6 id={generateSlug(props.children[0])} {...props} />,
        }}
      />
      <Footer />
    </div>
  );
}

export default Blogpage;
