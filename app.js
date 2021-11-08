deepai.setApiKey("52f5a794-8f2d-498d-a173-d4441ea2285a");

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
            <img class="img-fluid" src='${resp.output_url}' >
            </div>
  
  
  `;
});
