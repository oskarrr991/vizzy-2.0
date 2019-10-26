function getDOM() {
    BodyStyling();
    getBackground();
    getBodyCONTENT();
}
function BodyStyling(){
    document.body.style.backgroundColor = '#113dcb';
    document.body.style.fontFamily = 'roboto';
    document.body.style.color = 'white';
    document.body.style.maxWidth = '1000px';
    document.body.style.margin = 'auto';
}
function getBackground()
{
    document.body.appendChild(getBackFIGURE());
    document.body.appendChild(getBackIMG());
}
function getBackIMG(){
    backimage = document.createElement('img');
    backimage.id = 'back';
    backimage.src = 'images/hero.png';
    backimage.style.position = 'absolute';
    backimage.style.left = '45%';
    backimage.style.height = '800px';
    backimage.style.top = '13%';
    return backimage;
}
function getBackFIGURE(){
    red_background = document.createElement('div');
    red_background.id = 'background';
    red_background.style.margin = '0% 0% 0% 45%';
    red_background.style.top = '20%';
    red_background.style.left = '-31.5%';
    red_background.style.width = '150%';
    red_background.style.height = '150%';
    red_background.style.backgroundColor = '#d82b32';
    red_background.style.webkitTransform = 'rotate(-53deg)';
    red_background.style.position = 'fixed';
    red_background.style.zIndex = '-1';
    return red_background;
}
function getBodyCONTENT() {
    document.body.appendChild(getHeader());
    document.body.appendChild(getSection());
}
function getHeader(){
    header = document.createElement('header');
    header.style.height = '37px';
    header.style.marginTop = '20px';
    header.appendChild(getLogo());
    header.appendChild(getSignButtons());
    header.appendChild(getDekstopMENU());
    header.appendChild(getMobileMENU());
    return header;
}
function getSection(){
    section = document.createElement('section');
    section.appendChild(getSlider());
    return section;
}
function getLogo() {
    let img = document.createElement('img');
    img.alt = 'logo';
    img.src = 'images/logo.png';
    let div = document.createElement('div');
    div.className = 'logo';
    div.style.float = 'left';
    div.style.cursor = 'pointer';
    div.appendChild(img);
    return div;
}
function getSignButtons(){
    sign = document.createElement('div');
    sign.id = 'reg_btn';
    sign.style.position = 'fixed';
    sign.style.left = '63%';
    sign.style.top = '1.5%';
    signIN = document.createElement('span');
    signIN.innerHTML = 'SIGN IN';
    signUP = document.createElement('button');
    signUP.id = 'sign_up';
    signUP.innerHTML = 'SIGN UP';
    signUP.style.display = 'inline-block';
    signUP.style.borderRadius = '10px';
    signUP.style.backgroundColor = 'white';
    signUP.style.border = 'none';
    signUP.style.color = '#113dcb';
    signUP.style.textAlign = 'center';
    signUP.style.fontSize = '12px';
    signUP.style.padding = '18px';
    signUP.style.width = '130px';
    signUP.style.cursor = 'pointer';
    signUP.style.margin = '5px';
    signUP.style.fontWeight = 'bold';

    sign.appendChild(signIN);
    sign.appendChild(signUP);
    return sign;
}
function getDekstopMENU() {
    nav = document.createElement('nav');
    nav.className = 'desktop';
    nav.id = 'menu-container';
    nav.style.float = 'left';
    nav.style.margin = '0px 20px';

    nav.appendChild(getDesktopMenuItems());
    return nav;
}
function getDesktopMenuItems() {
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing'];
    ul = document.createElement('ul');
    ul.id = 'menu';
    ul.style.margin = '0px';
    ul.style.padding = '0px';

    for (let i = 0; i < menuItems.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.style.display = 'inline';
        li.style.padding = '0 1vw';
        li.style.fontSize = '.9em';
        a.href = '#';
        a.innerHTML = menuItems[i];
        a.style.lineHeight = '40px';
        a.style.color = 'white';
        a.style.textDecoration = 'none';
        a.style.textTransform = 'uppercase';
        a.style.cursor = 'pointer';
        a.onmouseover = function() {
            this.style.borderBottom = '3px solid white';
        }
        a.onmouseout = function() {
            this.style.borderBottom = 'none';
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}
function getMobileMENU()
{
    label = document.createElement('label');
    label.style.border = '3px solid';
    label.style.padding = '10px';
    label.style.fontFamily = 'calibri';
    label.style.display = 'block';
    label.style.width = '70px';
    label.style.textAlign = 'center';
    label.style.opacity = '1';
    label.onmouseover = function(){
        this.style.backgroundColor = 'white';
        this.style.color = '#113dcb';
        this.style.cursor = 'pointer';
    }
    label.onmouseout = function(){
        this.style.backgroundColor = 'transparent';
        this.style.color = 'white';
        this.style.cursor = 'pointer';
    }
    label.innerHTML = 'MENU'
    mobile_nav = document.createElement('nav');
    mobile_nav.className = 'mobile-menu';
    mobile_nav.style.display = 'none';
    mobile_nav.style.top = '3%';
    mobile_nav.style.left = '5%';
    mobile_nav.style.position = 'fixed';
    mobile_nav.style.zIndex = '1';

    label.onclick = function() { open_mobile_menu(); }

    ul = document.createElement('ul');
    ul.id = 'mobile-menu-items';
    ul.style.position = 'fixed';
    ul.style.display = 'none';
    ul.style.backgroundColor = 'white';
    ul.style.width = '50px';
    ul.style.margin = '0px 0px -15px 3px';

    const menuItems = ['Home', 'Products', 'Templates', 'Pricing'];
    for (let i = 0; i < menuItems.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.style.display = 'block';
        li.style.textAlign = 'center';
        a.style.textDecoration = 'none';
        a.style.color = '#113dcb';
        a.href = '#';
        a.innerHTML = menuItems[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    mobile_nav.appendChild(label);
    mobile_nav.appendChild(ul);
    return mobile_nav;
}
function open_mobile_menu(){
    if(document.getElementById('mobile-menu-items').style.display == 'block'){
      document.getElementById('mobile-menu-items').style.display = 'none';
    }
    else{
      document.getElementById('mobile-menu-items').style.display = 'block';
    }
}
function getSlider(){
    slider = document.createElement('div');
    slider.id = 'slider';
    slider_content = document.createElement('div')
    slider_content.id = 'slider-content';
    slider_content.style.maxWidth = '600px';    
    slider.appendChild(slider_content);
    slider_content.appendChild(getArticles());
    slider.appendChild(getSliderBUTTONS());
    slider.appendChild(getCreateDesignBUTTTON());

    return slider;
}
function getSliderBUTTONS(){
    slider_buttons = document.createElement('div');
    slider_buttons.id = 'buttons';
    slider_buttons.style.position = 'absolute';
    slider_buttons.style.bottom = '15%';
    slider_buttons.style.margin = '0px 0px 0px -20px';

    for(n = 1; n <= 4; n++){
        button = document.createElement('button');
        slider_buttons.appendChild(button);
        button.className = 'slider_btn';
        button.style.height = '15px';
        button.style.width = '15px';
        button.style.backgroundColor = '#4478ff';
        button.style.borderRadius = '50%';
        button.style.display = 'inline-block';
        button.style.border = 'none';
        button.style.margin = '10px';
        button.style.cursor = 'pointer'; 
    }

    return slider_buttons; 
}
function getArticles(){
    articles = document.createElement('article');
    articles.className = 'mySlides';
    articles.style.margin = '10% 0% 0% 0%';
    articles.style.width = '100%';
    sliderTitle = document.createElement('span');
    sliderTitle.id = 'slider_title';
    sliderTitle.style.fontSize = '70px';
    sliderTitle.style.fontWeight = 'bold';
    article_paragraph = document.createElement('p');
    sliderTitle.innerHTML = 'Create Stunning <br> Virtual Media';
    article_paragraph.innerHTML = 'Super simple tool to create trendy videos and pictures <br> for your ads, social media, blogs and website <br> Make your project stand out!';
    
    articles.appendChild(sliderTitle);
    articles.appendChild(article_paragraph);
    return articles;
}
function getCreateDesignBUTTTON(){
    design = document.createElement('div');
    design.id = 'Design_btn';
    create = document.createElement('button');
    create.id = 'design_btn_content';
    arrow = document.createElement('span');
    arrow.id = 'arrow';

    design.style.position = 'absolute';
    design.style.top = '50%';
    create.style.display = 'inline-block';
    create.style.borderRadius = '10px';
    create.style.backgroundColor = '#ff5969';
    create.style.border = 'none';
    create.style.color = 'white';
    create.style.textAlign = 'center';
    create.style.fontSize = '12px';
    create.style.padding = '18px';
    create.style.width = '160px';
    create.style.cursor = 'pointer';
    create.style.margin = '5px';
    create.style.fontWeight = 'bold';
    create.innerHTML = 'CREATE BUTTON &#8594';

    create.appendChild(arrow);
    design.appendChild(create);

    return design;
}

// var slideIndex = 1;
// showDivs(slideIndex);

// function currentDiv(n) {
    
//   showDivs(slideIndex = n);
// }

// function showDivs() {
//   var x = document.getElementsByClassName('mySlides');

//   for (var i = 0; i < x.length; i++) {
//     x[i].style.display = 'none';  
//   }

//   x[slideIndex-1].style.display = 'block';  
// }

