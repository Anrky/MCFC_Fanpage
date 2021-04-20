const preview = document.querySelector('img[name="preview"]');
const preview_container = document.querySelector(".att_down_container");

function PreviewFile() {
  let file = document.querySelector('input[type="file"]').files[0];
  let reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
    preview_container.style.height = "auto";
  } else {
    preview.src = "";
    preview_container.style.height = "0";
  }
}

const close_att = document.querySelector(".att_remove");
const submit_form = document.querySelector(".submit-btn");

close_att.addEventListener("click", () => {
  let file = document.querySelector('input[type="file"]');

  preview.src = "";
  preview_container.style.height = "0";
  file.value = "";
});

submit_form.addEventListener("click", () => {
  //TODO: submit the form and check all the fields in the form and then send me email about the form...
});
