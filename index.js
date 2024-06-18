const names = ["Alice", "Bob", "Carol", "David", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];

let freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
];

function calculateAveragePrice() {
    let totalPrice = 0;
    freelancers.forEach(freelancer => {
        totalPrice += freelancer.price;
    });

    const averagePrice = totalPrice / freelancers.length;
    document.getElementById("average-price").innerText = `Average starting price: $${averagePrice}`;
}

function renderFreelancers() {
    const freelancersList = document.getElementById("freelancers-list");
    freelancersList.innerHTML = ""; // Clear existing list

    freelancers.forEach(freelancer => {
        const freelancerItem = document.createElement("div");
        freelancerItem.innerText = `${freelancer.name}, ${freelancer.occupation} - $${freelancer.price}`;
        freelancersList.appendChild(freelancerItem);
    });

    calculateAveragePrice();
}

function generateNewFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100

    const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice };
    freelancers.push(newFreelancer);

    renderFreelancers();
}

setInterval(generateNewFreelancer, 5000); // Add a new freelancer every 5 seconds
