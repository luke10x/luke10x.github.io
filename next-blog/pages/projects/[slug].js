import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
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