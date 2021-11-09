deepai.setApiKey("52f5a794-8f2d-498d-a173-d4441ea2285a");

var bwimageinp;

document.getElementById("bwimage").onchange = function (evt) {
  var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      bwimageinp = fr.result;
    };

    fr.readAsDataURL(files[0]);
  } else {
  }
};

document.getElementById("but11").addEventListener("click", async function () {
  console.log("started");
  document.getElementById(
    "result"
  ).innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  try {
    var resp = await deepai.callStandardApi("colorizer", {
      image: document.getElementById("bwimage"),
    });
  } catch (error) {
    if (
      error.message == "DeepAI error: File picker has no file picked: image"
    ) {
      document.getElementById("result").innerHTML = `
    
      <div class="alert alert-danger" role="alert">
      <p>لطفا عکس را انتخاب کنید</p>
    </div>
      
      
      `;
    } else {
      document.getElementById("result").innerHTML = `
    
      <div class="alert alert-danger" role="alert">
      ${error.message}
    </div>
      
      
      `;
    }
  }

  console.log(resp);
  document.getElementById("result").innerHTML = `
  <div class="card">
  <div class="card-body">
  <img id="colorresult" src="${resp.output_url}" class="img-fluid" alt="...">
  <br>
  

  <a id="downloadcolor" class="btn btn-primary mt-3"  title="colorresult">
    دانلود عکس
</a>


  </div>
</div>

`;
  let btnDownload = document.getElementById("downloadcolor");
  let img = document.getElementById("colorresult");
  // Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
  btnDownload.addEventListener("click", () => {
    let imagePath = img.getAttribute("src");
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
  });
  function getFileName(str) {
    return str.substring(str.lastIndexOf("/") + 1);
  }
});
