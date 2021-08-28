class ShapeFollower {
  constructor() {
    this.shapeW = 25;
    this.shapeH = 70;
    this.shapeCenterCollection = [];

    // selectors
    this.$container = $('#container');
    this.$window = $(window);
    this.$document = $(document);
  }

  init() {
    this.makeGrid();
    this.bindEvents();
  }

  makeGrid() {
    this.$container.empty();

    let windowW = this.$window.innerWidth();
    let windowH = this.$window.innerHeight();

    let numContainers = Math.floor(windowH / (this.shapeH + 50));
    let numShapes = Math.floor(windowW / this.shapeW / 8);
    let gutter = (windowW - this.shapeW * numShapes) / numShapes;
    let totalWidthShape = this.shapeW + gutter;

    for (let j = 0; j < numContainers; j++) {
      let template = `<div class="shape__row">`;
      for (let i = 0; i < numShapes; i++) {
        template += `<div class="shape" style="left: ${totalWidthShape * i + gutter / 2}px;"></div>`;
      }
      template += `</div>`;

      this.$container.append(template);
    }

    this.makeAnimation();
  }

  makeAnimation() {
    let $shapes = $(".shape");

    this.getShapesCenterPosition($shapes);
    this.bindMouseMoveEvent($shapes);
  }

  getShapesCenterPosition(shapes) {
    this.shapeCenterCollection = [];
    shapes.each((index, shape) => {
      let $shape = $(shape);
      this.shapeCenterCollection.push([
      $shape.offset().left + $shape.width() / 2, $shape.offset().top + $shape.height() / 2]);

    });
  }

  bindMouseMoveEvent(shapes) {
    this.$document.off('mousemove');

    this.$document.mousemove(e => {
      this.followMouseRotation(e, shapes);
    });
  }

  bindEvents() {
    let resizeDebounce = _.debounce(this.makeGrid.bind(this), 500);
    this.$window.on('resize', () => {
      $('.shape').fadeOut('fast');
      resizeDebounce();
    });
  }

  followMouseRotation(e, shapes) {
    shapes.each((index, shape) => {
      let $shape = $(shape);
      let angle = Math.atan2(e.pageX - this.shapeCenterCollection[index][0], -(e.pageY - this.shapeCenterCollection[index][1])) * (180 / Math.PI);

      $shape.css({ '-webkit-transform': 'rotate(' + angle + 'deg)' });
      $shape.css({ '-moz-transform': 'rotate(' + angle + 'deg)' });
      $shape.css({ 'transform': 'rotate(' + angle + 'deg)' });
    });
  }}


var shapeFollower = new ShapeFollower();
shapeFollower.init();