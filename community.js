// JavaScript for Community Page

// Default posts data for the simulated database
const defaultPostsData = [
    {
        id: 1,
        author: "Aisha Rahman",
        username: "aisha_r",
        avatar: "A",
        avatarColor: "bg-purple-600",
        content: "Alhamdulillah, I finally mastered the pronunciation of ض (Dhad) after weeks of practice! Any tips for ظ (Dha) which I'm still struggling with? #TajweedJourney",
        timestamp: "2 hours ago",
        likes: 24,
        comments: [
            {
                id: 101,
                author: "Fatima Zahra",
                username: "fatima_z",
                avatar: "F",
                avatarColor: "bg-emerald-600",
                content: "MashaAllah! For ظ (Dha), try placing the tip of your tongue between your front teeth while making the sound. It helped me a lot!",
                timestamp: "1 hour ago"
            },
            {
                id: 102,
                author: "Khadija Omar",
                username: "khadija_o",
                avatar: "K",
                avatarColor: "bg-teal-600",
                content: "Sister Aisha, I recommend watching Sheikh Ahmad's video on the difference between ض and ظ. It's very helpful!",
                timestamp: "30 minutes ago"
            }
        ],
        image: null,
        isLiked: false,
        isBookmarked: false,
        showComments: false,
        newComment: ""
    },
    {
        id: 2,
        author: "Fatima Zahra",
        username: "fatima_z",
        avatar: "F",
        avatarColor: "bg-emerald-600",
        content: "Just finished my first online Tajweed class with Ustadha Khadija. Her explanation of the rules of Noon Saakin was so clear! Looking forward to next week's class. Who else is in the intermediate group? #TajweedLearn",
        timestamp: "1 day ago",
        likes: 42,
        comments: [
            {
                id: 201,
                author: "Sarah Abdullah",
                username: "sarah_a",
                avatar: "S",
                avatarColor: "bg-amber-600",
                content: "I'm in the intermediate group too! Ustadha Khadija is amazing, isn't she? I've learned so much from her classes.",
                timestamp: "20 hours ago"
            },
            {
                id: 202,
                author: "Maryam Hassan",
                username: "maryam_h",
                avatar: "M",
                avatarColor: "bg-indigo-600",
                content: "I'll be joining the intermediate group next month insha'Allah! How are you finding the pace of the classes?",
                timestamp: "12 hours ago"
            }
        ],
        image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Online+Class&font=playfair-display",
        isLiked: false,
        isBookmarked: false,
        showComments: false,
        newComment: ""
    },
    {
        id: 3,
        author: "Sarah Abdullah",
        username: "sarah_a",
        avatar: "S",
        avatarColor: "bg-amber-600",
        content: "Resource recommendation: I found this amazing app that helps with Tajweed practice. It highlights the rules as you read and gives instant feedback on your recitation. Has anyone else tried \"Quran Tajweed Pro\"? #TajweedResources",
        timestamp: "3 days ago",
        likes: 36,
        comments: [
            {
                id: 301,
                author: "Aisha Rahman",
                username: "aisha_r",
                avatar: "A",
                avatarColor: "bg-purple-600",
                content: "Yes! I've been using it for a month now. The instant feedback feature is so helpful for self-practice.",
                timestamp: "2 days ago"
            },
            {
                id: 302,
                author: "Zaynab Ali",
                username: "zaynab_a",
                avatar: "Z",
                avatarColor: "bg-pink-600",
                content: "Is it available for Android? I couldn't find it on the Play Store.",
                timestamp: "1 day ago"
            },
            {
                id: 303,
                author: "Sarah Abdullah",
                username: "sarah_a",
                avatar: "S",
                avatarColor: "bg-amber-600",
                content: "@zaynab_a Yes, it's available for both iOS and Android. Search for 'Quran Tajweed Pro' (with the spaces) and it should appear!",
                timestamp: "1 day ago"
            }
        ],
        image: null,
        isLiked: false,
        isBookmarked: false,
        showComments: false,
        newComment: ""
    }
];

// Load posts from localStorage or use default data
let postsDatabase = JSON.parse(localStorage.getItem('tajweedPosts')) || defaultPostsData;

// Function to save posts to localStorage
const savePosts = () => {
    localStorage.setItem('tajweedPosts', JSON.stringify(postsDatabase));
};

document.addEventListener('DOMContentLoaded', function() {
    // Modal Functionality
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');

    // Login/Signup Tabs
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Post Creation Elements
    const submitPost = document.getElementById('submit-post');
    const postContent = document.getElementById('post-content');
    const postsFeed = document.getElementById('posts-feed');

    // User is always considered logged in now
    let isLoggedIn = true;

    // Open login modal
    const openLoginModal = () => {
        loginModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    // Close login modal
    const closeLoginModal = () => {
        loginModal.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable scrolling
    };

    // No login button event listeners needed

    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', closeLoginModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            closeLoginModal();
        }
    });

    // Tab switching functionality
    if (loginTab && signupTab) {
        loginTab.addEventListener('click', function() {
            loginTab.classList.add('border-b-2', 'border-indigo-500', 'text-white');
            loginTab.classList.remove('text-gray-400');
            signupTab.classList.remove('border-b-2', 'border-indigo-500', 'text-white');
            signupTab.classList.add('text-gray-400');

            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        });

        signupTab.addEventListener('click', function() {
            signupTab.classList.add('border-b-2', 'border-indigo-500', 'text-white');
            signupTab.classList.remove('text-gray-400');
            loginTab.classList.remove('border-b-2', 'border-indigo-500', 'text-white');
            loginTab.classList.add('text-gray-400');

            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    }

    // Form submission (for demo purposes)
    const loginFormElement = loginForm?.querySelector('button[type="submit"]');
    const signupFormElement = signupForm?.querySelector('button[type="submit"]');

    if (loginFormElement) {
        loginFormElement.addEventListener('click', function(e) {
            e.preventDefault();

            // Simple validation
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            // Simulate successful login
            isLoggedIn = true;
            updateUIForLoginStatus();
            closeLoginModal();

            // Show success message
            alert('You have successfully logged in!');
        });
    }

    if (signupFormElement) {
        signupFormElement.addEventListener('click', function(e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const agreeTerms = document.getElementById('agree-terms').checked;

            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            if (!agreeTerms) {
                alert('Please agree to the Terms of Service and Privacy Policy');
                return;
            }

            // Simulate successful signup
            isLoggedIn = true;
            updateUIForLoginStatus();
            closeLoginModal();

            // Show success message
            alert('You have successfully signed up and are now logged in!');
        });
    }

    // Function to render posts from database
    const renderPosts = () => {
        // Clear the posts feed
        postsFeed.innerHTML = '';

        // Render each post from the database
        postsDatabase.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg border border-gray-700 shadow-xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/20 mb-6 hover-card';
            postElement.dataset.postId = post.id;

            let imageHtml = '';
            if (post.image) {
                imageHtml = `
                    <div class="mt-4">
                        <div class="glass overflow-hidden rounded-lg">
                            <img src="${post.image}" alt="Post image" class="w-full h-48 object-cover">
                        </div>
                    </div>
                `;
            }

            postElement.innerHTML = `
                <div class="flex space-x-4">
                    <div class="w-12 h-12 rounded-full ${post.avatarColor} flex items-center justify-center text-white font-bold">
                        ${post.avatar}
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-semibold text-white">${post.author}</h4>
                                <p class="text-gray-400 text-sm">@${post.username} • ${post.timestamp}</p>
                            </div>
                            <div class="relative post-menu">
                                <button class="text-gray-400 hover:text-white transition duration-300 post-menu-btn">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                                <div class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden post-menu-dropdown">
                                    <button class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150 delete-post-btn">
                                        <i class="fas fa-trash-alt mr-2 text-red-400"></i> Delete Post
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="text-black">${post.content}</p>
                        </div>
                        ${imageHtml}
                        <div class="mt-4 flex justify-between">
                            <div class="flex space-x-6">
                                <button class="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition duration-300 like-button ${post.isLiked ? 'text-red-500' : ''}">
                                    <i class="${post.isLiked ? 'fas' : 'far'} fa-heart"></i>
                                    <span>${post.likes}</span>
                                </button>
                                <button class="flex items-center space-x-1 text-gray-400 hover:text-blue-500 transition duration-300 comment-button">
                                    <i class="far fa-comment"></i>
                                    <span>${post.comments.length}</span>
                                </button>
                            </div>
                            <button class="text-gray-400 hover:text-indigo-500 transition duration-300 bookmark-button ${post.isBookmarked ? 'text-indigo-500' : ''}">
                                <i class="${post.isBookmarked ? 'fas' : 'far'} fa-bookmark"></i>
                            </button>
                        </div>

                        <!-- Comments Section (Hidden by default) -->
                        <div class="comments-section mt-4 ${post.showComments ? '' : 'hidden'}">
                            <div class="border-t border-gray-700 pt-4">
                                <h5 class="text-white font-medium mb-3">Comments (${post.comments.length})</h5>

                                <!-- Comment List -->
                                <div class="space-y-4 mb-4 comments-list">
                                    ${post.comments.map(comment => `
                                        <div class="flex space-x-3">
                                            <div class="w-8 h-8 rounded-full ${comment.avatarColor} flex items-center justify-center text-white font-bold text-sm">
                                                ${comment.avatar}
                                            </div>
                                            <div class="flex-1">
                                                <div class="glass-card p-3 rounded-lg">
                                                    <div class="flex justify-between items-start">
                                                        <div>
                                                            <span class="font-medium text-white">${comment.author}</span>
                                                            <span class="text-gray-400 text-xs ml-2">@${comment.username}</span>
                                                        </div>
                                                        <span class="text-gray-400 text-xs">${comment.timestamp}</span>
                                                    </div>
                                                    <p class="text-black text-sm mt-1">${comment.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>

                                <!-- New Comment Input -->
                                <div class="flex space-x-3">
                                    <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                        U
                                    </div>
                                    <div class="flex-1">
                                        <div class="relative">
                                            <input type="text" class="w-full px-4 py-2 glass rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" placeholder="Add a comment..." data-post-id="${post.id}">
                                            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-500 hover:text-indigo-400 transition duration-300 submit-comment-btn" data-post-id="${post.id}">
                                                <i class="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Add event listeners for like, bookmark, comment, and post menu buttons
            const likeButton = postElement.querySelector('.like-button');
            const bookmarkButton = postElement.querySelector('.bookmark-button');
            const commentButton = postElement.querySelector('.comment-button');
            const submitCommentBtn = postElement.querySelector('.submit-comment-btn');
            const commentInput = postElement.querySelector('input[data-post-id]');
            const postMenuBtn = postElement.querySelector('.post-menu-btn');
            const postMenuDropdown = postElement.querySelector('.post-menu-dropdown');
            const deletePostBtn = postElement.querySelector('.delete-post-btn');

            likeButton.addEventListener('click', () => {
                if (!isLoggedIn) {
                    openLoginModal();
                    return;
                }

                const postId = parseInt(postElement.dataset.postId);
                const postIndex = postsDatabase.findIndex(p => p.id === postId);

                if (postIndex !== -1) {
                    const post = postsDatabase[postIndex];
                    post.isLiked = !post.isLiked;
                    post.likes += post.isLiked ? 1 : -1;
                    savePosts();
                    renderPosts();
                }
            });

            bookmarkButton.addEventListener('click', () => {
                if (!isLoggedIn) {
                    openLoginModal();
                    return;
                }

                const postId = parseInt(postElement.dataset.postId);
                const postIndex = postsDatabase.findIndex(p => p.id === postId);

                if (postIndex !== -1) {
                    const post = postsDatabase[postIndex];
                    post.isBookmarked = !post.isBookmarked;
                    savePosts();
                    renderPosts();
                }
            });

            // Post menu toggle
            postMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up
                postMenuDropdown.classList.toggle('hidden');
            });

            // Close dropdown when clicking elsewhere
            const closeDropdown = (e) => {
                if (!postMenuBtn.contains(e.target) && !postMenuDropdown.contains(e.target)) {
                    postMenuDropdown.classList.add('hidden');
                }
            };
            document.addEventListener('click', closeDropdown);

            // Delete post functionality
            deletePostBtn.addEventListener('click', () => {
                const postId = parseInt(postElement.dataset.postId);

                // Create and show custom confirmation dialog
                const confirmDialog = document.createElement('div');
                confirmDialog.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                confirmDialog.innerHTML = `
                    <div class="bg-gray-800 rounded-lg p-6 max-w-sm mx-auto shadow-2xl border border-gray-700">
                        <h3 class="text-xl font-semibold text-white mb-4">Delete Post</h3>
                        <p class="text-gray-300 mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
                        <div class="flex justify-end space-x-4">
                            <button class="cancel-delete px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors duration-200">Cancel</button>
                            <button class="confirm-delete px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">Delete</button>
                        </div>
                    </div>
                `;

                document.body.appendChild(confirmDialog);

                // Add event listeners to the dialog buttons
                const cancelButton = confirmDialog.querySelector('.cancel-delete');
                const confirmButton = confirmDialog.querySelector('.confirm-delete');

                cancelButton.addEventListener('click', () => {
                    document.body.removeChild(confirmDialog);
                });

                confirmButton.addEventListener('click', () => {
                    // Remove post from database
                    const postIndex = postsDatabase.findIndex(p => p.id === postId);

                    if (postIndex !== -1) {
                        postsDatabase.splice(postIndex, 1);
                        savePosts();
                        renderPosts();
                        showNotification('Post deleted successfully', 'success');
                    }

                    document.body.removeChild(confirmDialog);
                });
            });

            // Toggle comments section
            commentButton.addEventListener('click', () => {
                if (!isLoggedIn) {
                    openLoginModal();
                    return;
                }

                const postId = parseInt(postElement.dataset.postId);
                const postIndex = postsDatabase.findIndex(p => p.id === postId);

                if (postIndex !== -1) {
                    const post = postsDatabase[postIndex];
                    post.showComments = !post.showComments;
                    savePosts();
                    renderPosts();
                }
            });

            // Submit new comment
            if (submitCommentBtn) {
                submitCommentBtn.addEventListener('click', () => {
                    if (!isLoggedIn) {
                        openLoginModal();
                        return;
                    }

                    const postId = parseInt(submitCommentBtn.dataset.postId);
                    const commentText = commentInput.value.trim();

                    if (!commentText) {
                        return;
                    }

                    const postIndex = postsDatabase.findIndex(p => p.id === postId);

                    if (postIndex !== -1) {
                        const post = postsDatabase[postIndex];

                        // Generate a new comment ID
                        const newCommentId = post.comments.length > 0
                            ? Math.max(...post.comments.map(c => c.id)) + 1
                            : postId * 100 + 1;

                        // Add the new comment
                        post.comments.push({
                            id: newCommentId,
                            author: 'You',
                            username: 'user',
                            avatar: 'U',
                            avatarColor: 'bg-indigo-600',
                            content: commentText,
                            timestamp: 'Just now'
                        });

                        // Clear the input, save to localStorage, and re-render
                        commentInput.value = '';
                        savePosts();
                        renderPosts();
                    }
                });

                // Allow submitting comment with Enter key
                commentInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        submitCommentBtn.click();
                    }
                });
            }

            postsFeed.appendChild(postElement);
        });
    };

    // Initial render of posts
    renderPosts();

    // No image upload functionality as requested

    // Post submission
    if (submitPost) {
        submitPost.addEventListener('click', function() {
            const content = postContent.value.trim();

            if (!content) {
                showNotification('Please enter some content for your post', 'error');
                return;
            }

            // Format content with hashtags highlighted
            const formattedContent = content.replace(/#(\w+)/g, '<span class="text-indigo-600 font-semibold">#$1</span>');

            // Create new post object
            const newPost = {
                id: postsDatabase.length > 0 ? Math.max(...postsDatabase.map(p => p.id)) + 1 : 1,
                author: 'You',
                username: 'user',
                avatar: 'U',
                avatarColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
                content: formattedContent,
                timestamp: 'Just now',
                likes: 0,
                comments: [],
                image: null,
                isLiked: false,
                isBookmarked: false,
                showComments: false,
                newComment: ''
            };

            // Add to database
            postsDatabase.unshift(newPost);

            // Save to localStorage and re-render posts
            savePosts();
            renderPosts();

            // Clear the textarea
            postContent.value = '';

            // Show success message
            showNotification('Your post has been published!', 'success');

            // Scroll to the top of the posts feed
            postsFeed.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        // Allow submitting with Enter + Ctrl
        postContent.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                submitPost.click();
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Show notification function
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
            type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' :
            'bg-indigo-500'
        } text-white`;

        // Add icon based on type
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';

        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-${icon} mr-2"></i>
                <span>${message}</span>
            </div>
        `;

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(-10px)';
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(10px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add hover effect to posts
    const posts = document.querySelectorAll('.hover-card');

    posts.forEach(post => {
        // Add mouse move effect for cards
        post.addEventListener('mousemove', (e) => {
            const rect = post.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            // Apply the rotation and slight scale
            post.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        // Reset transform on mouse leave
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            post.style.transition = 'transform 0.5s ease';
        });

        // Remove transition on mouse enter for smooth movement
        post.addEventListener('mouseenter', () => {
            post.style.transition = 'transform 0.1s ease';
        });
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
});
