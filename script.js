
function fetchProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {  
                resolve({ id: 1, name: "Hillary Johns" });
            } else {  
                reject("Unable to fetch profile, please try again");
            }
        }, 1000);  
    });
}

 function fetchPosts() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() > 0.2) {  
                resolve([{ id: 1, content: "Post 1" }, { id: 2, content: "Post 2" }]);
            } else {  
                reject("Error! Unable to fetch posts");
            }
        }, 1000);

    });
}

function fetchComments() {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (Math.random() > 0.2) {  
                resolve([{ commentId: 1, text: " This was wonderful post!" }, { commentId: 2, text: "Very detailed post and I would encourage people to read it." }]);
            } else {  
                reject("Opps!! Error occured while fetching the commenst");
        
            }
        }, 1000);
    });
}

// getting data

async function fetchDataSequentially() {
    try {
        console.log("Fetching user profile...");
        const profile = await fetchProfile();
        console.log("Profile retrieved:", profile);

        console.log("Fetching posts...");
        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);

        console.log("Fetching comments...");
        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);

        return { profile, posts, comments };  

    } catch (error) {
       
        console.error("Error occurred while fetching:", error);
        return { error };  
    }
}


// parallel fetching

function fetchDataInParallel() {
    Promise.all([fetchProfile(), fetchPosts(), fetchComments()])
        .then(([profile, posts, comments]) => {
            console.log("User profile retrieved:", profile);
            console.log("Posts retrieved:", posts);
            console.log("Comments retrieved:", comments);
        })
        .catch(error => console.error("Error! Unable to fetch multiple :", error));
}


async function fetchDataSequentiallyAsync() {
    try {
        const profile = await fetchProfile();
        console.log("User profile retrieved:", profile);
        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);
        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);
    } catch (error) {
        console.error("Error! unable to run async:", error);
    }
}

// async/await

async function fetchDataInParallelAsync() {
    try {
        console.log("Starting parallel fetch with async/await");

        
        const [profile, posts, comments] = await Promise.all([
            fetchProfile(),
            fetchPosts(),
            fetchComments()
        ]);

       
        console.log("User profile retrieved:", profile);
        console.log("Posts retrieved:", posts);
        console.log("Comments retrieved:", comments);

    } catch (error) {

        console.error("Error! Unable to run parallel:", error);
    }
}



// fetching profile post and comment

async function getUserContent() {
    try {
        const profile = await fetchProfile();
        console.log("User profile retrieved:", profile);

        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);

        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);

        console.log("All data fetched successfully:", { profile, posts, comments });
    } catch (error) {
        console.error("Error!unable to get user profile:", error);
    }
}


// calling  all this fucntion in the browser console

fetchDataSequentially();
fetchDataInParallel();
fetchDataSequentiallyAsync();
fetchDataInParallelAsync();
getUserContent();

