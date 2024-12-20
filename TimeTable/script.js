document.addEventListener('DOMContentLoaded', () => {
    // File upload functionality
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileName');
    const uploadButton = document.getElementById('uploadButton');
    const submitButton = document.getElementById('submit');
    const fileTableBody = document.querySelector('#fileTable tbody');
    const scheduleTableBody = document.querySelector('#scheduleTable tbody');

    let selectedFiles = [];

    // Handle file input change
    fileInput?.addEventListener('change', function () {
        selectedFiles = Array.from(fileInput.files);
        if (selectedFiles.length > 0) {
            const fileNames = selectedFiles.map(file => file.name).join(', ');
            fileNameDisplay.textContent = `Selected files: ${fileNames}`;
            fileNameDisplay.style.display = 'block';
            uploadButton.disabled = false;
        } else {
            fileNameDisplay.style.display = 'none';
            uploadButton.disabled = true;
        }
    });

    // Handle upload button click
    uploadButton?.addEventListener('click', function () {
        alert('Files uploaded: ' + selectedFiles.map(file => file.name).join(', '));
    });

    // Handle submit button click
    submitButton?.addEventListener('click', function (event) {
        event.preventDefault();

        const fromDate = document.getElementById('from').value;
        const toDate = document.getElementById('to').value;

        if (selectedFiles.length > 0 && fromDate && toDate) {
            const fileNames = selectedFiles.map(file => file.name);
            localStorage.setItem('uploadedFiles', JSON.stringify(fileNames));
            localStorage.setItem('scheduleData', JSON.stringify({ startDate: fromDate, endDate: toDate }));

            window.location.href = "index2.html"; // Redirect to the next page
        } else {
            alert('Please select both files and dates.');
        }
    });

    // Populate file table from localStorage
    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    uploadedFiles.forEach((file, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td> <!-- Serial number -->
                         <td>${file}</td> <!-- File name -->
                         <td><button onclick="viewFile('${file}')">View</button></td>`;
        fileTableBody?.appendChild(row);
    });

    // Populate schedule table from localStorage
    const scheduleData = JSON.parse(localStorage.getItem('scheduleData')) || {};
    if (scheduleData.startDate && scheduleData.endDate) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${scheduleData.startDate}</td> <!-- Start date -->
                         <td>${scheduleData.endDate}</td> <!-- End date -->`;
        scheduleTableBody?.appendChild(row);
    }

    // View file placeholder function
    window.viewFile = function (fileName) {
        alert("No View Option for this time. After we will show the file Preview(Future)");
    };
});