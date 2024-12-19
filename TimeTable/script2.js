document.addEventListener('DOMContentLoaded', () => {
    const fileTableBody = document.querySelector('#fileTable tbody');
    const scheduleTableBody = document.querySelector('#scheduleTable tbody');

    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    uploadedFiles.forEach((file, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td> <!-- Serial number -->
            <td>${file}</td> <!-- File name -->
            <td><button onclick="viewFile('${file}')">View</button></td>
        `;
        fileTableBody.appendChild(row);
    });

    
    const scheduleData = JSON.parse(localStorage.getItem('scheduleData')) || {};
    if (scheduleData.startDate && scheduleData.endDate) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${scheduleData.startDate}</td> <!-- Start date -->
            <td>${scheduleData.endDate}</td> <!-- End date --> `;
        scheduleTableBody.appendChild(row);
    }
});

function viewFile(fileName) {
    alert("No View Option for this time. After we will show the file Preview(Future)");
}