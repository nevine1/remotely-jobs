import React from 'react';
import Jobs from './Jobs';
import Content_view from './Content_view';

const Content = () => {
    return (
        <main className="mt-8 mx-5 sm:mx-12">
            <p className="font-bold text-gray-700 text-lg">All jobs</p>
            <div className="block md:flex">
                <div>
                <Jobs />
                </div>
                <Content_view />
            </div>
        </main>
    )
}

export default Content;