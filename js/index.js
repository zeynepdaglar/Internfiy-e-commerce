// 
myProductGlider = null;

function createMyGlider() {    
  myProductGlider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    itemWidth: 300,
    draggable: true,
    scrollLock: false,
    dots: '#dots',
    rewind: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToScroll: 'auto',
                itemWidth: 300,
                slidesToShow: 'auto',
                exactWidth: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: false,
                arrows: false,
                scrollLock: true
            }
        }
    ]
});
}

        var gliderProductsData =[];
        var categories;
        var category ={};
        var products =[];
        $(function (){
            $.get("product-list.json", function(data){
                  for (let index = 0; index < data.responses.length; index++) {
                      categories = data.responses[0][0].params.userCategories;

                      for (let index = 0; index < categories.length; index++) {
                          category = categories[index];
                          var charIndex = category.lastIndexOf(">");
                          var categoryName = category.slice(charIndex+1);
                          var mobilMenu = $("#mobilMenuDiv");
                          $("#mobilMenuDiv").append('<div class="nav-link inline mobilGreyLine" onclick="mobilActive(this,'+index+')"><a href="#" class="mobilLink"></a>' + categoryName + '</div>');
              
                          $("#menuDiv").append('<div class="menu-box" onclick="active(this,'+ index +')"><div id="link1" class="linkbox"><a class="navlink" href="#">' + categoryName + '</a></div></div>')
                      }
                      gliderProductsData = data.responses[0][0].params.recommendedProducts;

                      var defaultCategories = categories[0];
                      var defaultProduct = gliderProductsData[defaultCategories];
                      var defaultProductName;
                      var defaultProductImage;
                      var defaultProductPriceText;
                      var defaultShippingFree;
                      for (let index = 0; index < defaultProduct.length; index++) {
                      const sizeOzelproduct = defaultProduct[index];
                      defaultProductName = sizeOzelproduct.name;
                      defaultProductImage = sizeOzelproduct.image;
                      defaultProductPriceText = sizeOzelproduct.priceText;
                      defaultShippingFree = sizeOzelproduct.shippingFree;
                      var el = $("#productslider").append('<div class="glider-item p-10"><div class="card h-100"><img class="card-img" src="'+ defaultProductImage +'" alt=""><h6 class="card-title">'+ defaultProductName +'</h6><div class="card-price">'+ defaultProductPriceText +'</div><div class="card-shipping">+ Ücretsiz Kargo</div><button type="button" class="btn btn-primary d-block d-lg-none" id="liveToastBtn" onclick="Toast(this)">Sepete Ekle</button></div></div>');
                     }
                     $("#x").append("<div id='sliderbtn' class='d-none d-lg-block'><button class='glider-prev glider-btn-left'><i class='bi bi-chevron-left arrow-icon'></i></button><button class='glider-next glider-btn-right'><i class='bi bi-chevron-right arrow-icon'></i></button></div>");
                     createMyGlider();
                  }
            });
        });
        function mobilActive(item, categoryIndex){
             $("#mobilMenuDiv div").removeClass("mobilBlueLine");
             $(item).addClass("mobilBlueLine");
             $("#productslider").remove(); 
             $("#sliderbtn").remove();   
             createHtmlElements(item, categoryIndex);
             createMyGlider();
        }
        function active(item, categoryIndex){
           $("#menuDiv div").removeClass("blueLine");
           $("#menuDiv div").removeClass("bluebox");
           $("#menuDiv a").removeClass("blueText");
           $(item).addClass("blueLine");
           $(item).find("div").addClass("bluebox");
           $(item).find("a").addClass("blueText");
           $("#productslider").remove();
           $("#sliderbtn").remove();
           createHtmlElements(item, categoryIndex);
           createMyGlider();
        }

        function createHtmlElements(item, categoryIndex) { 
          $("#x").prepend("<div id='productslider' class='glider'></div>");
          $("#x").append("<div id='sliderbtn' class='d-none d-lg-block'><button class='glider-prev glider-btn-left'><i class='bi bi-chevron-left arrow-icon'></i></button><button class='glider-next glider-btn-right'><i class='bi bi-chevron-right arrow-icon'></i></button></div>");
             var categoryname = categories[categoryIndex];
             var products = gliderProductsData[categoryname];
             var productName;
             var productImage;
             var productPriceText;
             var shippingFree;
             for (let index = 0; index < products.length; index++) {
               const product = products[index];
               productName = product.name;
               productImage = product.image;
               productPriceText = product.priceText;
               shippingFree = product.shippingFree;
               var el = $("#productslider").append('<div class="glider-item p-10"><div class="card h-100"><img class="card-img" src="'+ productImage +'" alt=""><h6 class="card-title">'+ productName +'</h6><div class="card-price">'+ productPriceText +'</div><div class="card-shipping">+ Ücretsiz Kargo</div><button type="button" class="btn btn-primary d-block d-lg-none" id="liveToastBtn" onclick="Toast(this)">Sepete Ekle</button></div></div>');
              }
        }

function Toast(item) {
  $(item).empty().append("Ürün Özelliği Seç");
  var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
  var toast = new bootstrap.Toast(toastLiveExample)
  toast.show()
  }
}