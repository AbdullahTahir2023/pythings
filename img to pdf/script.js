const imageInput = document.getElementById('image-input');
const convertBtn = document.getElementById('convert-btn');
const status = document.getElementById('status');

convertBtn.addEventListener('click', () => {
  const file = imageInput.files[0];

  if (!file) {
    status.textContent = 'Please select an image.';
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const imgData = event.target.result;
    const doc = new jsPDF();
    doc.addImage(imgData, 'JPEG', 10, 10);
    doc.save('image.pdf');
    status.textContent = 'PDF generated successfully!';
  };
  reader.readAsDataURL(file);
});
