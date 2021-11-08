deepai.setApiKey("52f5a794-8f2d-498d-a173-d4441ea2285a");

document.getElementById("but11").addEventListener("click", async function () {
  console.log("started");
  document.getElementById(
    "result"
  ).innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  var resp = await deepai.callStandardApi("colorizer", {
    image: document.getElementById("bwimage"),
  });

  console.log(resp);
  document.getElementById("result").innerHTML = `
  


  
            <div class="card">
            <div class="card-body">
            <img class="img-fluid" src='${resp.output_url}' >
            </div>
  
  
  `;
});
