"use strict"

const projectDescriptions = new Map([
    ["project1", "This is a small web scraping project to scrape linkedin Jobs. The scrapper has a GUI that will take a search term(eg. 'Python Developer') and a Location(eg. 'Turkey') and then it will return the mostly mentioned tech skills required for that position."],
    ["project2", "Project 2 description"],
    ["project3", "Project 3 description"],
    ["project4", "Project 4 description"],
    ["project5", "Project 5 description"],
])

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsProject = document.querySelectorAll('.project');

const modalParagraph = document.querySelector('.modal p');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    const topPercent = 100*(0.5 + window.pageYOffset / (document.body.scrollHeight*0.5));

    const modalHTML = `<a href="${this.id}.html">Go to project</a>`;

    modal.insertAdjacentHTML('beforeend', modalHTML);
    modalParagraph.innerHTML=projectDescriptions.get(this.id);
    modal.querySelector('h1').textContent = this?.querySelector('p').textContent;
    modal.style.top = `${topPercent}%`;
    modal.style.translate = `translate(${-topPercent}%, ${-topPercent}%)`;
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document?.querySelector('.modal a').remove();
}

for (let btn of btnsProject){
    btn.addEventListener('click', openModal.bind(btn));
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});



