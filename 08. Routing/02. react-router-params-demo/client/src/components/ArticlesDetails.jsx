import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Example() {
    const [articleDetails, setArticleDetails] = useState([]);
    const params = useParams();
    //const { articleId } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${params.articleId}`);

            if (response.statusText == 'No Content') {
                navigate('/not-found');
            };

            const result = await response.json();
            setArticleDetails(result);
        })();
    }, []);

    return (
        <div>
            <div className="mt-10 p-10 px-4 sm:px-0">
                <h3 className="p-5 text-base/7 font-semibold text-gray-900">Article Information</h3>
            </div>
            <div className="p-5 mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Article Name</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{articleDetails.title}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">About</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {articleDetails.content}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}