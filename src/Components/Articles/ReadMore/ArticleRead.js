import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Head from '../../Head/Head';
import Footer from '../../Footer/Footer';
import Articles from '../Articles';

const ArticleRead = () => {

    const articles = useLoaderData();

    return (
        <div>

            <Head></Head>

            <div className='mt-5 pt-5'>

                <div className='top-head'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='black-label  '>
                            <span className='black-title'><b>{articles.title} </b></span>

                            <p className='black-title-p'
                                dangerouslySetInnerHTML={{ __html: articles.details }}
                            />

                        </div>
                    </div>

                    <div className=' pb-1 '>
                        <div className='prix   '>
                            <div>
                                <span className='prix-span'><b><span className='crt'>Created :</span> {articles.createdAt}</b></span>
                            </div>
                            {/* <div className='d-flex align-items-center justify-content-center'>
                                <span className='crt'>Regisration Below</span>
                                <i class="fa-solid fa-arrow-down"></i>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default ArticleRead;