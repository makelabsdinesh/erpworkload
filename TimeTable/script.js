const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');
const uploadButton = document.getElementById('uploadButton');
const submitButton = document.getElementById('submit');
let selectedFiles = [];
    
// bulk upload
fileInput.addEventListener('change', function () {
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


uploadButton.addEventListener('click', function () {
    alert('Files uploaded: ' + selectedFiles.map(file => file.name).join(', '));
});


submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    const fromDate = document.getElementById('from').value;
    const toDate = document.getElementById('to').value;

    
    if (selectedFiles.length > 0 && fromDate && toDate) {
        const fileNames = selectedFiles.map(file => file.name);
        localStorage.setItem('uploadedFiles', JSON.stringify(fileNames));
        localStorage.setItem('scheduleData', JSON.stringify({ startDate: fromDate, endDate: toDate }));

        window.location.href = "index2.html";
    } 
    else {
        alert('Please select both files and dates.');
    }
});