// Show role from login
const role = localStorage.getItem('userRole') || "User";
document.getElementById('userRole').textContent = role;

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('userRole');
    window.location.href = "login.html";
});

// Sample POI Data
const poiData = [
    { name: "Central Park", type: "Park", location: "New York" },
    { name: "City Library", type: "Library", location: "Boston" },
    { name: "Mountain View Cafe", type: "Cafe", location: "San Francisco" },
    { name: "Tech Museum", type: "Museum", location: "Los Angeles" },
    { name: "Hidden Lake", type: "Nature", location: "Denver" }
];

// Search POIs
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('poiQuery').value.toLowerCase();
    const resultsDiv = document.getElementById('poiResults');
    resultsDiv.innerHTML = '';

    const filtered = poiData.filter(poi => poi.name.toLowerCase().includes(query) || poi.type.toLowerCase().includes(query));

    if(filtered.length === 0){
        resultsDiv.innerHTML = `<p style="grid-column:1/-1;text-align:center;">No results found for "${query}"</p>`;
        return;
    }

    filtered.forEach(poi => {
        const card = document.createElement('div');
        card.className = "feature-card";
        card.innerHTML = `
            <h3>${poi.name}</h3>
            <p>Type: ${poi.type}</p>
            <p>Location: ${poi.location}</p>
            ${role === 'Admin' ? `<p style="color:#4c5fd5;font-weight:600;">Admin View Enabled</p>` : ''}
        `;
        resultsDiv.appendChild(card);
    });

    // Show analytics for Admin
    if(role === 'Admin'){
        document.getElementById('analytics').style.display = 'block';
        drawChart(filtered);
    }
});

// Admin Analytics Chart
function drawChart(data){
    const ctx = document.getElementById('chart').getContext('2d');
    const labels = data.map(d => d.name);
    const counts = data.map((d,i)=> i+1);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'POI Count',
                data: counts,
                backgroundColor: '#4c5fd5'
            }]
        },
        options: { responsive:true }
    });
}
