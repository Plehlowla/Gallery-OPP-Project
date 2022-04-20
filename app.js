function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element){
  // console.log(element);
  this.container = element
  this.list = [...element.querySelectorAll('.img')];
  // console.log(this.list);
  // target
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
  let self = this;
  // bind function

  // this.openModal = this.openModal.bind(this);
  // container event
  this.container.addEventListener('click',function(e){
    console.log(this);
    // self.openModal();
    this.openModal();
  }.bind(this));
}

Gallery.prototype.openModal = function(){
  // console.log(this);
  console.log('open modal');
  this.modal.classList.add('open');
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));