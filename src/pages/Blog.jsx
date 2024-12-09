import React from 'react';

// Sample blog post content as a string
const blogPostContent = `
# My First Blog Post

Welcome to my awesome blog! 

## Code Example

Here's a simple JavaScript function:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}! Welcome to my blog.\`;
}

console.log(greet('World'));
\`\`\`

**Markdown** makes it *easy* to write blog posts with rich formatting.`;

const Blog = () => {
  // Simple markdown-like parsing function
  const parseMarkdown = (text) => {
    // Parse headings
    text = text.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    text = text.replace(/^## (.+)$/gm, '<h2>$1</h2>');

    // Parse code blocks
    text = text.replace(/```(\w+)\n([\s\S]*?)```/g, (match, lang, code) => 
      `<pre><code class="language-$1">${code.trim()}</code></pre>`
    );

    // Parse bold and italic
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert line breaks to paragraphs
    text = text.split('\n\n').map(para => `<p>${para}</p>`).join('\n');

    return text;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article 
        className="prose"
        dangerouslySetInnerHTML={{ 
          __html: parseMarkdown(blogPostContent) 
        }}
      />
    </div>
  );
};

export default Blog;