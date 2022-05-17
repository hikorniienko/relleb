import React, { FC } from 'react';
import Header from '../templates/header/component';
import BlogArticle from '../templates/blog-article/component';
import Footer from '../templates/footer/component';

const BlogArticlePage: FC = () => (
  <>
    <Header line />
    <BlogArticle />
    <Footer />
  </>
);

export default BlogArticlePage;
