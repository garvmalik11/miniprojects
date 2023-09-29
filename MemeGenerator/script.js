const memebutton = document.querySelector('#button');
const memetitle = document.querySelector('.title');
const memeimage = document.querySelector('.image'); 
const memeauthor = document.querySelector('.author');

const updatedetails = (url, title, author) => {
    //adding url to src to the image tag
    memeimage.setAttribute("src", url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = "MemeBy: "+author;
};

const generateMeme = () =>{
    //fetching api
    fetch("https://meme-api.com/gimme/wholesomememes")
    //converting the response to json
    .then((response) => response.json())
    //data.url, title, author all lie in api
    .then(data =>{ updatedetails(data.url, data.title, data.author)
        });
};

memebutton.addEventListener('click', generateMeme);
generateMeme();