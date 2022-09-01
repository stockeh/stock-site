import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import './Blog.css';

function Blog({ markdown }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../assets/blogs/md/${markdown}`).then((module) =>
      fetch(module.default)
        .then((res) => res.text())
        .then((text) => setContent(text))
    );
  }, [markdown]);

  return (
    <div>
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
            // https://github.com/remarkjs/react-markdown/issues/265
            <img alt={node.properties.alt} style={{ maxWidth: '60%' }} {...props} />
          ),
        }}
      />
    </div>
  );
}

export default Blog;
