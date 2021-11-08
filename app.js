deepai.setApiKey("52f5a794-8f2d-498d-a173-d4441ea2285a");

document.getElementById("but11").addEventListener("click", async function () {
  console.log("started");
  document.getElementById("result").innerHTML = `در حال رنگ آمیزی`;

  var resp = await deepai.callStandardApi("colorizer", {
    image: document.getElementById("avatar"),
  });

  console.log(resp);
  document.getElementById("result").innerHTML = `
  


  
            <div class="card">
            <div class="card-body">
            <img src='${resp.output_url}' >
            </div>
  
  
  `;
});
