import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = ({ projects }) => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16"> {/* Adjusted pt-16 for padding-top */}
            <Navbar />
            <Hero />
            <div className="container mx-auto py-8 px-4">
                <div className="mt-12">
                    <Skills />
                </div>
                <div className="mt-12">
                    <Projects projects={projects}/>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const projectsDirectory = path.join(process.cwd(), 'content/projects');
    const filenames = await fs.readdir(projectsDirectory);

    const projects = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(projectsDirectory, filename);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data } = matter(fileContents);
            return data;
        })
    );

    return {
        props: {
            projects,
        },
    };
}

export default Home;
