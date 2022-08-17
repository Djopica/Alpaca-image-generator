// Primary Buttons select
const background_btn = document.getElementById('btn-background');
const neck_btn = document.getElementById('btn-neck');
const ears_btn = document.getElementById('btn-ears');
const leg_btn = document.getElementById('btn-leg');
const hair_btn = document.getElementById('btn-hair');
const mouth_btn = document.getElementById('btn-mouth');
const eyes_btn = document.getElementById('btn-eyes');
const accessories_btn = document.getElementById('btn-accessories');

//heading select
const secondary_heading = document.getElementById('heading2');

//section select
const background_section = document.getElementById('background-items');
const neck_section = document.getElementById('neck-items');
const ears_section = document.getElementById('ear-items');
const leg_section = document.getElementById('leg-items');
const hair_section = document.getElementById('hair-items');
const mouth_section = document.getElementById('mouth-items');
const eyes_section = document.getElementById('eyes-items');
const accessories_section = document.getElementById('accessories-items');           
const style_section = document.getElementById('section-style');


//All secondary buttons select acc to section
const bgBtnAll = document.querySelectorAll('.backgroundsbuttons');
const neckBtnAll = document.querySelectorAll('.neckbuttons');
const earsBtnAll = document.querySelectorAll('.earbuttons');
const legBtnAll = document.querySelectorAll('.legbuttons');
const hairBtnAll =document.querySelectorAll('.hairbuttons');
const mouthBtnAll = document.querySelectorAll('.mouthbuttons');
const eyesBtnAll = document.querySelectorAll('.eyebuttons');
const accBtnAll = document.querySelectorAll('.accessoriesbuttons');

//display & hide sections on primary button click

function hide(ids){
    ids.forEach(id => {
      id.style.display ='none';
    });
  }
  
  function show(ids){
    ids.forEach(id => { 
      id.style.display ='block';
    });
  }

background_btn.onclick = function() {

    show([
        style_section, 
        secondary_heading, 
        background_section 
    ]);

    hide([
    neck_section,
    ears_section,
    leg_section,
    hair_section,
    mouth_section,
    eyes_section,
    accessories_section
        ]);
}

neck_btn.onclick = function() {

    show([style_section,
        secondary_heading,
        neck_section
    ]);

    hide([background_section,
        ears_section,
        leg_section,
        hair_section,
        mouth_section,
        eyes_section,
        accessories_section]);

}

ears_btn.onclick = function() {

    show([style_section,
        secondary_heading,
        ears_section]);

    hide([neck_section,
        background_section,
        leg_section,
        hair_section,
        mouth_section,
        eyes_section,
        accessories_section,]);

}

leg_btn.onclick = function() {

    show([style_section,
        secondary_heading,
        leg_section]);

    hide([neck_section,
        ears_section,
        background_section,
        hair_section,
        mouth_section,
        eyes_section,
        accessories_section]);

}

hair_btn.onclick = function() {
    
    show([style_section,
        secondary_heading,
        hair_section]);

    hide([neck_section,
        ears_section,
        leg_section,
        background_section,
        mouth_section,
        eyes_section,
        accessories_section]);

}

mouth_btn.onclick = function() {

    show([style_section,
        secondary_heading,
        mouth_section]);

    hide([neck_section,
        ears_section,
        leg_section,
        hair_section,
        background_section,
        eyes_section,
        accessories_section]);

}

eyes_btn.onclick = function() {

    show([style_section,
        secondary_heading,
        eyes_section]);

    hide([neck_section,
        ears_section,
        leg_section,
        hair_section,
        mouth_section,
        background_section,
        accessories_section]);

}
accessories_btn.onclick = function() {

    show([style_section,
        secondary_heading,
        accessories_section]);

    hide([neck_section,
        ears_section,
        leg_section,
        hair_section,
        mouth_section,
        eyes_section,
        background_section]);   

}

// Button state Active 


//Image Change Js

bgBtnAll.forEach(item => {

    item.addEventListener('click', (event) => {

        document.getElementById('background').src = "/alpaca-generator-assets/alpaca/backgrounds/" + event.target.value + ".png";
      
        bgBtnAll.forEach(e => {
            e.classList.remove('active-bg');});

            event.target.classList.add('active-bg');

  })
  })

  neckBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('neck').src = "/alpaca-generator-assets/alpaca/neck/" + event.target.value + ".png";
      
      neckBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  })
  })

  earsBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('ears').src = "/alpaca-generator-assets/alpaca/ears/" + event.target.value + ".png";
        
      earsBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  
    })
  })

  legBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('leg').src = "/alpaca-generator-assets/alpaca/leg/" + event.target.value + ".png";

      legBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  hairBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('hair').src = "/alpaca-generator-assets/alpaca/hair/" + event.target.value + ".png";

      hairBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  mouthBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('mouth').src = "/alpaca-generator-assets/alpaca/mouth/" + event.target.value + ".png";

      mouthBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  eyesBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('eyes').src = "/alpaca-generator-assets/alpaca/eyes/" + event.target.value + ".png";

      eyesBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  accBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('accessories').src = "/alpaca-generator-assets/alpaca/accessories/" + event.target.value + ".png";

      accBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  document.querySelectorAll('.btn-acc').forEach(item => {
    item.addEventListener('click', (event) => {
      document.querySelectorAll('.btn-acc').forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');

    });
  });

//random image style & button color and confetti on random button click



const random = document.getElementById('random');

  function randomBtnClick(x){
    x[Math.floor(Math.random() * x.length)].click();
 }

 random.onclick = function(){ 
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  random.style.backgroundColor = "#" + randomColor;
 randomBtnClick(bgBtnAll);
 randomBtnClick(neckBtnAll);
 randomBtnClick(earsBtnAll);
 randomBtnClick(legBtnAll);
 randomBtnClick(hairBtnAll);
 randomBtnClick(mouthBtnAll);
 randomBtnClick(eyesBtnAll);
 randomBtnClick(accBtnAll);
 }

//random.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//Download button html to canvas

const downloadBtn = document.getElementById('download');

downloadBtn.addEventListener('click', function () {

  html2canvas( document.getElementById('image') ).then((canvas) => {
    let a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    a.download = "Alpaca.jpg";
    a.click();
  });

});