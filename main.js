let anime = document.querySelector('#anime');
anime.setAttribute('class', 'avatar');
console.log(anime);

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the "Add Contact" icon
  const addIcon = document.querySelector('.add-icon');
  if (addIcon) {
    addIcon.addEventListener('click', function(event) {
      // Prevent the default behavior of the link (navigation)
      event.preventDefault();
      
      // Navigate to the "Add Contact" page
      window.location.href = addIcon.getAttribute('href');
    });
  }
});


const contacts = [
  {
    id: +19078048430,
    contactName: 'Gojo S. Jjk',
    imgUrl: 'https://thumbs.dreamstime.com/b/happy-auto-mechanic-man-smith-car-workshop-service-repair-maintenance-gesture-people-concept-smiling-showing-thumbs-up-78423946.jpg',
    description: 'Mechanic.',
    category: 'Friend',
    email:"Gojo@gmail.com"
  },
  {
    id: +27034859709,
    contactName: 'Ju wong',
    imgUrl: 'https://media.istockphoto.com/id/1399721590/photo/portrait-of-young-man-in-harajuku-district.jpg?s=612x612&w=0&k=20&c=UkLewHysh0-Z670Q9dwrLKgsjD7J6rUU3yodvcaufMo=',
    description: 'Tech bro',
    category: 'Work',
    email:"Juwong123@gmail.com"
  },
  {
    id: +38127336515,
    contactName: 'Sun Gun',
    imgUrl: 'https://media.istockphoto.com/id/1467754763/photo/portrait-of-a-man-looking-at-a-camera-in-a-modern-stylish-office.jpg?s=612x612&w=0&k=20&c=lG5_kW1h7Ej9zdlerD2pmwCnd70sIkS4bPgsDuQ_sF8=',
    description: 'Business partner.',
    category: 'Business',
    email:"Sungun24@gmail.com"
  },
  {
    id: +48167037884,
    contactName: 'Asure James',
    imgUrl: 'https://media.istockphoto.com/id/1372301142/photo/portrait-of-one-young-and-happy-cheerful-man-smiling-looking-at-the-camera-having-fun.jpg?s=612x612&w=0&k=20&c=PPeQPEOPxNc2Mm5LoGHxL3TWdg93KHeXP9iT9vGGdFs=',
    description: 'Gaming Bro.',
    category: 'Gaming',
    email:"James2020@gmail.com"
  },
  {
    id: +57030377722,
    contactName: 'Mr. Peter',
    imgUrl: 'https://media.istockphoto.com/id/1168597397/photo/on-time.jpg?s=612x612&w=0&k=20&c=a-Ag23aBjK6RdX-TkShbRgIm_xgq65mr6dylYkBguIw=',
    description: "Project Supervisor.",
    category: ' Work',
    email:"Peter24@gmail.com"
  },
  {
    id: +6030377722,
    contactName: 'Mack greg',
    imgUrl: 'https://media.istockphoto.com/id/698450922/photo/businessman-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=bYwFhlDlfcmmrqj-f7lZZpwjmdw379OYZA-UOTsGXDk=',
    description: 'Project Partner.',
    category: 'Work',
    email:"Mack489@gmail.com"
  },
  {
    id: +78127336515,
    contactName: 'George mark',
    imgUrl: 'https://media.istockphoto.com/id/1390048518/photo/portrait-of-a-man-enjoying-in-the-forest-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=pRWPEPt2rPyUu7iQKmw8XVrTuAIrntr8E0OB-I9StI8=',
    description: 'Customer.',
    category: 'Work',
    email:"Mark144@gmail.com"
  },
  {
    id: +8127336515,
    contactName: 'Ali Usman',
    imgUrl: 'https://media.istockphoto.com/id/1399035132/photo/having-a-video-call-during-cumping-vacation.jpg?s=612x612&w=0&k=20&c=LRvcrJ7HZncIv-ykIFvylaLqR1XA9wJAXrUhrMd8t8w=',
    description: 'Coding Bro.',
    category: 'Friend',
    email:"Usman419@gmail.com"
  },
  {
    id: +97034859709,
    contactName: 'Alia st.',
    imgUrl: 'https://media.istockphoto.com/id/1219487717/photo/smile-a-fashion-designer-her-looking-in-the-design-of-new-products.jpg?s=612x612&w=0&k=20&c=I3O7DqiQ2HUYBcgsludTugXDDOiDaVyGFKwq7BeQzFg=',
    description: 'Tech sis.',
    category: 'Work',
    email:"Aliaaa22@gmail.com"
  },
  {
    id: +107753093847,
    contactName: 'Joy Queens',
    imgUrl: 'https://media.istockphoto.com/id/1161278011/photo/portrait-of-asian-businesswoman-or-lawyer-in-black-and-white-dress-with-confident-face-who.jpg?s=612x612&w=0&k=20&c=qlPVe-wV_rt9_codp4syPsNVDoCb_YcDYGmYqmKBhfY=',
    description: 'Human Resources.',
    category: 'Work',
    email:"Queensjay1!@gmail.com"
  },
];

console.log(contacts);

// store contacts in local storage
const contactDatabase = localStorage.getItem('contactData');
if (!contactDatabase) {
  localStorage.setItem('contactData', JSON.stringify(contacts));
}

// convert contactDatabase to javascript object
const contactList = JSON.parse(contactDatabase);
const contactArrangement = document.getElementById('arrangement');

// loop through contactList and display each contact
for (contact of contactList) {
    const contactCard = document.createElement('div');
    contactCard.setAttribute('class', 'card');
    // contactCard.setAttribute('style', 'width: 18rem;');

    // image element
    const contactImg = document.createElement('img');
    contactImg.setAttribute('class', 'card-img-top');
    contactImg.setAttribute('src', contact.imgUrl);

    // card body
    const contactCardBody = document.createElement('div');
    contactCardBody.setAttribute('class', 'card-body');
    contactCardBody.setAttribute('id', contact.id);
    contactCardBody.addEventListener('click', (event) => handleContact(event));
    console.log(contactCardBody);
    
    // contact name
    const contactName = document.createElement('h5');
    contactName.setAttribute('class', 'card-title');
    contactName.textContent = contact.contactName;

    // contact email
    const contactEmail = document.createElement('p');
    contactEmail.setAttribute('class', 'card-text');
    contactEmail.textContent = `N${contact.email}`;

    // contact description
    const contactDesc = document.createElement('p');
    contactDesc.setAttribute('class', 'card-text');
    contactDesc.textContent = contact.description;

     // contact number
     const contactNumber = document.createElement('p');
     contactNumber.setAttribute('class', 'card-num');
     contactNumber.textContent = `${contact.id}`;

    // assemble contact card body
     contactCardBody.appendChild(contactName);
     contactCardBody.appendChild(contactNumber);
     contactCardBody.appendChild(contactDesc);

    // assemble contact details
    contactCard.appendChild(contactImg);
    contactCard.appendChild(contactCardBody);

    // add contact card to contact arrangement 
    contactArrangement.appendChild(contactCard);

}

// handle single contact click
function handleContact(e) {
    const contactId = e.target.id;
    const contact = contactList.find(contact => contact.id == contactId);
    console.log(contact);
    localStorage.setItem('contact', JSON.stringify(contact));
    window.location.href = './pages/contact.html';
}
