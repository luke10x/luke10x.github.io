import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface HomeProps {
  posts: {
    slug: string,
    frontmatter: {
      title: string,
      socialImage: string,
    },
  }[],
  projects: {
    slug: string,
    frontmatter: {
      title: string,
      socialImage: string,
    },
  }[],
}

const Home:FC<HomeProps> = ({ posts, projects }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/blog/${slug}`}>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
          </Link>
        </div>
      ))}

      {projects.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/projects/${slug}`}>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
          </Link>
        </div>
      ))}

    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files
    .map((fileName) => {
      const slug = fileName
        .replace('.md', '')
        .replace(/^\d{4}-\d{2}-\d{2}-/, "");
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      if (frontmatter.draft === true) {
        return null;
      }
      return {
        slug,
        frontmatter,
      };
    })
    .filter(f => f);

  const projectFiles = fs.readdirSync('projects');
  const projects = projectFiles
    .map((fileName) => {
      const slug = fileName
        .replace('.md', '')
        .replace(/^\d{1,}-/, "");

      const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      console.log(frontmatter.socialImage);
      if (frontmatter.draft === true) {
        return null;
      }
      return {
        slug,
        frontmatter,
      };
    })
    .filter(f => f);

  return {
    props: {
      posts,
      projects,
    },
  };  
}
export default Home;