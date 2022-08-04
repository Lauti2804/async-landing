const API = 'https://rickandmortyapi.com/api/character/?page=3';

const content = null || document.getElementById('content');
const title = null || document.querySelector("#title")



async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.results.map(video => `
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${video.image}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${video.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: ${video.status}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Species: ${video.origin.name}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
      
    `).slice(0, 20).join('')}
    `;

    let header = `
      ${videos.results.map(video=>
        `
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="${video.image}" alt="">
        
        `
        ).slice(4,5).join("")}
    `

    title.innerHTML = header;
    content.innerHTML = view;
    
  } catch (error) {
    console.log(error);
  }
})();

