//Fetch blogs from the API

function fetchBlogs() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const blogesContainer = document.getElementById('blogsContainer'); 
            blogsContainer.innerHTML = '';

            data.forEach(blog => {
                const blogCard = document.createElement('div');
                blogCard.classList.add('blogCard');

                const blogTitle = document.createElement('h2');
                blogTitle.textContent = blog.title;

                const blogContent = document.createElement('p');
                blogContent.textContent = blog.body;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('deleteButton');

                blogCard.appendChild(blogTitle);
                blogCard.appendChild(blogContent);
                blogCard.appendChild(deleteButton);

                blogsContainer.appendChild(blogCard);
            });
        });
}
fetchBlogs();


// Add a new blog
function addBlog() {
    const blogTitleInput = document.getElementById('blogTitleInput');
    const blogContentInput = document.getElementById('blogContentInput');

    const blogTitle = blogTitleInput.value;
    const blogContent = blogContentInput.value;

    if (blogTitle.trim() === '' || blogContent.trim() === '') {
        alert('Please enter a title and content for the blog.');
        return;
    }

    const newBlog = {
        title: blogTitle,
        body: blogContent,
    };


    