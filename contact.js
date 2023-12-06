
// // get contact from localStorage
// const contact = JSON.parse(localStorage.getItem('contact'));
// const title = document.getElementById('contactTitle');


// // Update image for all elements with class 'img'
// const contactImgs = document.getElementsByClassName('imgUrl');
// for (const imgElement of contactImgUrl) {
//     imgElement.src = contact.ImgUrl;
// }

// // Update text content for elements with class 'name'
// const contactNames = document.getElementsByClassName('name');
// for (const nameElement of contactNames) {
//     nameElement.textContent = contact.Name;
// }

// // Update attribute for elements with class 'city-count'
// const contactCityCounts = document.getElementsByClassName('city-count');
// for (const cityCountElement of contactCityCounts) {
//     cityCountElement.setAttribute('cityCount', 'city-count');
// }

// // Update text content for element with id 'city'
// const contactCity = document.getElementById('city');
// contactCity.textContent = contact.city;

// // Update text content for element with id 'country'
// const contactCountry = document.getElementById('country');
// contactCountry.textContent = contact.country;

// // Update attribute for elements with class 'details'
// const contDetails = document.getElementsByClassName('details');
// for (const detailsElement of contDetails) {
//     detailsElement.setAttribute('contdetails', 'details');
// }

// // Update text content for elements with class 'num'
// const contactNumbers = document.getElementsByClassName('num');
// for (const numElement of contactNumbers) {
//     numElement.textContent = ${contact.id};
// }

// // Update text content for elements with class 'email'
// const contactEmails = document.getElementsByClassName('email');
// for (const emailElement of contactEmails) {
//     emailElement.textContent = contact.email;
// }

// const profileView = document.getElementById('img');
// profileView.setAttribute('id', contact.id);
// profileView.addEventListener('click', viewProfile);

// // contact view
// function viewProfile() {
//     const view = JSON.parse(localStorage.getItem('view')) || [];
//     const contactObj = {
//         quantity: 1,
//         id: contact.id,
//         Name: contact.Name,
//         email: contact.email,
//         image: contact.picture,
//         city: contact.city,
//         country: contact.country,
//     };
//     view.push(contactObj);
//     localStorage.setItem('view', JSON.stringify(view));
//     window.location.href = '../pages/contact.html';
// }


// get product from localStorage
const contact = JSON.parse(localStorage.getItem('contact'));

const title = document.getElementById('contactTitle');
title.setAttribute('class', 'card-cont');
title.textContent = contact.contactName;

const contactImg = document.getElementById('contactImg');
contactImg.setAttribute('src', contact.imgUrl);

const contactEmail = document.getElementById('email');
contactEmail.textContent = `N${contact.email}`;

const contactDesc = document.getElementById('description');
contactDesc.textContent = contact.description;

const contactCardBody = document.getElementById('contactCardBody');
contactCardBody.setAttribute('id', contact.id);

// contact view
function viewProfile() {
    const view = JSON.parse(localStorage.getItem('view')) || [];
    const contactObj = {
        quantity: 1,
        id: contact.id,
        Name: contact.Name,
        email: contact.email,
        image: contact.imgUrl,
        description: contact.description,
        category: contact.category,
    };
    view.push(contactObj);
    localStorage.setItem('view', JSON.stringify(view));
    window.location.href = '../pages/contact.html';
}


