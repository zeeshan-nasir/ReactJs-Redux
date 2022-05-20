import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            let data = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            data = await data.json();
            console.log(data);
            if (data) {
                setPosts(data);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Get current posts

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="App">
            <div>
                <ul className="list">
                    {currentPosts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <button key={number} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
