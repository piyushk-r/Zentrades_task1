let p = fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");

function sortPopu(data) {
    const products = Object.values(data.products); // product ka object access karliya 
    return products.sort((a, b) => {
      const popu1 = parseInt(a.popularity); // convert karle string to int numeric comparison ke liye
      const popu2 = parseInt(b.popularity);
  
      return popu2 - popu1; // Descending order
    });
  }

p.then((data) => {
  return data.json();
})
  .then((completeData) => {
    // console.log(completeData.products);
    let data1 = "";
    // let productsData = completeData.products;
    let productsData = sortPopu(completeData)
    for (const productId in productsData) {
      if (productsData.hasOwnProperty(productId)) {
        const subcategory = productsData[productId].subcategory;
        const title = productsData[productId].title;
        const price = productsData[productId].price;
        const popularity = productsData[productId].popularity;
        console.log(`${price} ${popularity}`);
        data1 += `
        <tr>
            <td>${title}</td>
            <td>${subcategory}</td>
            <td>${price}</td>
            <td>${popularity}</td>
          </tr>
            `;
      }
    }

    document.getElementById("card-container").innerHTML=data1;

    
  })
  .catch((err) => {
    console.log(err);
  });
