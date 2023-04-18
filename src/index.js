const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */


document.getElementsByTagName("a")[0].innerHTML = "Servisler"

document.getElementsByTagName("a")[0].className = "italic"

document.getElementsByTagName("a")[1].innerHTML = "Ürünler"

document.getElementsByTagName("a")[1].className = "italic"

document.getElementsByTagName("a")[2].innerHTML = "Vizyon"

document.getElementsByTagName("a")[2].className = "italic"

document.getElementsByTagName("a")[3].innerHTML = "Özellikler"

document.getElementsByTagName("a")[3].className = "italic"

document.getElementsByTagName("a")[4].innerHTML = "Hakkımızda"

document.getElementsByTagName("a")[4].className = "italic"

document.getElementsByTagName("a")[5].innerHTML = "İletişim"

document.getElementsByTagName("a")[5].className = "italic"

document.getElementsByTagName("a")[6].innerHTML = "Copyright Bir Şirket Sitesi 2022"

document.getElementsByTagName("a")[6].className = "bold"

document.getElementsByTagName("h1")[0].textContent = "Bu DOM Mükemmel";

document.getElementsByTagName("button")[0].textContent = "Başlayın";

document.getElementsByTagName("h4")[0].innerHTML = "Özellikler"

document.getElementsByTagName("p")[0].innerHTML = "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

document.getElementsByTagName("h4")[1].innerHTML = "Hakkında"

document.getElementsByTagName("p")[1].innerHTML = "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."

document.getElementsByTagName("h4")[2].innerHTML = "Servisler"

document.getElementsByTagName("p")[2].innerHTML = "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."

document.getElementsByTagName("h4")[3].innerHTML = "Ürünler"

document.getElementsByTagName("p")[3].innerHTML = "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."

document.getElementsByTagName("h4")[4].innerHTML = "Vizyon"

document.getElementsByTagName("p")[4].innerHTML = "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

document.getElementsByTagName("h4")[5].innerHTML = "İletişim"

document.getElementsByTagName("p")[5].innerHTML = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye"

document.getElementsByTagName("p")[6].innerHTML = "+90 (123) 456-7899"

document.getElementsByTagName("p")[7].innerHTML = "satis@birsirketsitesi.com.tr"


document.getElementById('logo-img').src = "http://localhost:9000/img/logo.png";

document.getElementById('cta-img').src = "http://localhost:9000/img/cta.png";

document.getElementById('middle-img').src = "http://localhost:9000/img/accent.png";














