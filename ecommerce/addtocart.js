window.onload = function () {
  const cartdata = localStorage.getItem("cart");
  const newcartdata = JSON.parse(cartdata);
  display(newcartdata);
  console.log("newcartdata");
  var total = newcartdata.reduce((cr, pr) => {
    // return cr + pr.price;
    return cr + pr.price * 1;
  }, 0);
  const newtotal = document.getElementById("total");
  newtotal.innerText = total;
  console.log(newtotal);

  const newsigninname = document.getElementById("signupname");
  const signinnamedata = localStorage.getItem("loginperson");
  const newsignupdata = JSON.parse(signinnamedata);
  if (newsignupdata) {
    newsigninname.innerText = newsignupdata;
  } else {
    newsigninname.innerText = "Sign In";
  }
};
function display(data) {
  data.map((el) => {
    const dataproducts = document.getElementById("dataproducts");
    dataproducts.setAttribute("class", "dataproducts");

    const deals1 = document.createElement("div");
    deals1.setAttribute("class", "deals1");

    const imagedeals1 = document.createElement("img");
    imagedeals1.setAttribute("class", "imagedeals1");
    imagedeals1.setAttribute("src", el.imgurl);

    const deals1detlis = document.createElement("div");
    deals1detlis.setAttribute("class", "deals1detlis");

    const text1deals = document.createElement("span");
    text1deals.innerText = el.name;
    text1deals.setAttribute("class", "text1deals");

    const deals1subdetlis1 = document.createElement("div");
    deals1subdetlis1.setAttribute("class", "deals1subdetlis1");

    const price = document.createElement("span");
    price.innerText = "Price:-₹" + el.price + "/-";
    // price.innerText = `Price:- ₹${el.price}`;
    price.setAttribute("class", "price");

    const text2price = document.createElement("span");
    text2price.innerText = el.priceoff;
    text2price.setAttribute("class", "text2price");

    deals1subdetlis1.append(price, text2price);

    const reviews = document.createElement("span");
    reviews.innerText = el.rating;
    reviews.setAttribute("class", "reviews");

    const text2deals = document.createComment("span");
    text2deals.innerText = el.offerdetils;
    // text2deals.setAttribute("class", "text2deals");

    const deals1subdetlis2 = document.createElement("div");
    deals1subdetlis2.setAttribute("class", "deals1subdetlis2");

    const deals1viewdetails = document.createElement("span");
    deals1viewdetails.innerText = el.view;
    deals1viewdetails.setAttribute("class", "deals1viewdetails");

    deals1subdetlis2.append(deals1viewdetails);
    deals1detlis.append(
      text1deals,
      deals1subdetlis1,
      reviews,
      text2deals,
      deals1subdetlis2
    );
    deals1.append(imagedeals1, deals1detlis);
    dataproducts.append(deals1);
  });
}
const proceedtopay = document.getElementById("proceedtopay");
proceedtopay.addEventListener("click", () => {
  alert("Payment Successfully Done");
});

// window.onload = function () {};
