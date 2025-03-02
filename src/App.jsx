import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RemoveTargetBlank from './utils/RemoveTargetBlank';
import MarkdownLoader from './markdownLoader';
// Importing templates
import BlogTemplate from '../templates/BlogTemplate';
import DefaultTemplate from '../templates/DefaultTemplate';



const TEMPLATE_TYPE = 'blog'; // Change this to 'default', 'blog'

// Select the appropriate template based on configuration
const getTemplate = (type) => {
    switch (type) {
        case 'kashkul':
            return DefaultTemplate;
        case 'blog':
            return BlogTemplate;
        default:
            return DefaultTemplate;
    }
};


const App = () => {

    const SelectedTemplate = getTemplate(TEMPLATE_TYPE);

    const router = createBrowserRouter([
        {
          path: "/",
          element:<MarkdownLoader template={SelectedTemplate} />,
          children: [
            {
                path: "*",
                element:<MarkdownLoader template={SelectedTemplate} />,
            },
          ]
        },
    ]);

    return (
        <div className="app">
            <RemoveTargetBlank>
                <RouterProvider router={router} />
            </RemoveTargetBlank>
        </div>
    );
};

export default App;

