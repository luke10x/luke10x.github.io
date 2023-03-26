import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div className="flex flex-wrap gap-2">
        {frontmatter.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: md({ html: true }).render(content) }} />
      <div className="flex space-x-4">
        <Link href="/" className="before:absolute before:-left-2">⬅ back</Link>
        {frontmatter.links?.map((link, key) => (
          <Link target="_blank" key={key} href={link.url} className="before:absolute before:-left-2">{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug }}) {
  const files = fs.readdirSync('posts');
  
  const slugToFileNameMap = files.reduce((acc, fileName) => {
    const slug = fileName
      .replace('.md', '')
      .replace(/^\d{4}-\d{2}-\d{2}-/, "");
    acc[slug] = fileName;
    return acc;
  }, {});

  const fileName = fs.readFileSync(`posts/${slugToFileNameMap[slug]}`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}