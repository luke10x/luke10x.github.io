import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div className="flex flex-wrap gap-2">
      {frontmatter.tags.map((tag, key) => (
        <span key={key} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium">{tag}</span>
      ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      <div className="flex space-x-4">
        <Link href="/" className="before:absolute before:-left-2">⬅ back</Link>
        {frontmatter.links.map((link, key) => (
          <Link target="_blank" key={key} href={link.url} className="before:absolute before:-left-2">{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('projects');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '').replace(/^\d{1,}-/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug }}) {
  const files = fs.readdirSync('projects');
  
  const slugToFileNameMap = files.reduce((acc, fileName) => {
    const slug = fileName
      .replace('.md', '')
      .replace(/^\d{1,}-/, "");
    acc[slug] = fileName;
    return acc;
  }, {});

  const fileName = fs.readFileSync(`projects/${slugToFileNameMap[slug]}`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}