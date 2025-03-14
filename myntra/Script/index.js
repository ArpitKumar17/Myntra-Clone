let bagItems;
onLoad();
function onLoad()
{
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems=bagItemsStr?JSON.parse(bagItemsStr):[];
    displayHomePage();
    displayBagItem()
}

function addToBag(itemID)
{
bagItems.push(itemID);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagItem();
}
function displayBagItem()
{
    let bagItemCount = document.querySelector(".bag-item-count");
    if(bagItems.length>0)
    {
        bagItemCount.innerText = bagItems.length;
        bagItemCount.style.visibility= 'visible';


    }
    else
    {
        bagItemCount.style.visibility= 'hidden';
    }

}
function displayHomePage()
{
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement)
    {
        return;
    }
let innerHTML = "";
items.forEach(item => {
  innerHTML += `<div class="item-container">
<img  class="item-image" src="${item.image}" alt="item-image">
<div class="rating">
    ${item.rating.stars}⭐|${item.rating.count}
</div>
<div class="company-name">
   ${item.company}
</div>
<div class="item-name">
${item.item_name}
</div>
<div class="price">
<span class="current-price">Rs ${item.current_price}</span>
<span class="original-price">Rs ${item.original_price}</span>
<span class="discount">(${item.discount_percentage}% OFF)</span>
</div>

<button class="btn-add-bag" onclick="addToBag(${item.id})">ADD TO BAG</button>
</div>`;
});
itemsContainerElement.innerHTML = innerHTML;


}
