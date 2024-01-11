function findNearestSnapPosition(pixel, snapPositions) {
    var minDistance = Number.MAX_VALUE;
    var nearestSnap = null;

    for (var i = 0; i < snapPositions.length; i++) {
      var snap = snapPositions[i];
      var distance = getDistance(pixel.x(), pixel.y(), snap.x, snap.y);

      if (distance < minDistance) {
        minDistance = distance;
        nearestSnap = snap;
      }
    }

    return nearestSnap;
  }

  function isSnapPositionOccupied(snap, occupiedSnapPositions) {
    return occupiedSnapPositions.some(function (occupiedSnap) {
      return occupiedSnap.x === snap.x && occupiedSnap.y === snap.y;
    });
  }

  function findAvailableSnapPosition(pixel, snapPositions, occupiedSnapPositions) {
    for (var i = 0; i < snapPositions.length; i++) {
      var snap = snapPositions[i];

      var isOccupied = isSnapPositionOccupied(snap, occupiedSnapPositions);

      if (!isOccupied) {
        return snap;
      }
    }

    return { x: pixel.x(), y: pixel.y() };
  }

  function getDistance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }



  var width = window.innerWidth;
  var height = window.innerHeight;

  function drawImage(imageObj) {
    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height, 
    });
    
    var layer = new Konva.Layer();

    windowHeight = stage.height() * 0.82;

    let backdropHeight = windowHeight * 1.02
    let backdropWidth = backdropHeight * 455/549

    var backdrop = new Konva.Image({
      image: backdropObj,
      x: stage.width() / 2 - backdropWidth / 2,
      y: windowHeight / 2 - backdropHeight / 2,
      width: backdropWidth,
      height: backdropHeight,
    });

    let chosenPixelColour = pixelObjGreen; 

    let pixelSize = backdropWidth / 760;

    var pixel = new Konva.Image({
      image: chosenPixelColour,
      x: stage.width() / 2 - 100 / 2,
      y: windowHeight / 2 - 100 / 2,
      width: 100 * pixelSize,
      height: 100 * pixelSize,
      draggable: true,
      rotation: 90,
    });


    let middleX = (stage.width() / 2) + pixel.width()/2;
    let bufferPixelWidth = pixel.width() - 10
    let firstLayerY = (windowHeight * (7/8));
    var snapPositionsFirstLayer = [
      { x: middleX - bufferPixelWidth*2 - bufferPixelWidth/2, y: firstLayerY },
      { x: middleX - bufferPixelWidth - bufferPixelWidth/2 , y: firstLayerY },
      { x: middleX - bufferPixelWidth/2, y: firstLayerY },
      { x: middleX + bufferPixelWidth/2, y: firstLayerY },
      { x: middleX + bufferPixelWidth + bufferPixelWidth/2 , y: firstLayerY },
      { x: middleX + bufferPixelWidth*2 + bufferPixelWidth/2, y: firstLayerY },
    ];
    let secondLayerY = firstLayerY - (bufferPixelWidth * 6/7);
    var snapPositionsSecondLayer = [
      { x: middleX - bufferPixelWidth*3 , y: secondLayerY },
      { x: middleX - bufferPixelWidth*2 , y: secondLayerY },
      { x: middleX - bufferPixelWidth , y: secondLayerY },
      { x: middleX, y: secondLayerY },
      { x: middleX + bufferPixelWidth , y: secondLayerY },
      { x: middleX + bufferPixelWidth*2 , y: secondLayerY },
      { x: middleX + bufferPixelWidth*3 , y: secondLayerY },
    ];
    let thirdLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsThirdLayer = [
      { x: middleX - bufferPixelWidth*2 - bufferPixelWidth/2, y: thirdLayerY },
      { x: middleX - bufferPixelWidth - bufferPixelWidth/2 , y: thirdLayerY },
      { x: middleX - bufferPixelWidth/2, y: thirdLayerY },
      { x: middleX + bufferPixelWidth/2, y: thirdLayerY },
      { x: middleX + bufferPixelWidth + bufferPixelWidth/2 , y: thirdLayerY },
      { x: middleX + bufferPixelWidth*2 + bufferPixelWidth/2, y: thirdLayerY },
    ];
    let fourthLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsFourthLayer = [
      { x: middleX - bufferPixelWidth*3 , y: fourthLayerY },
      { x: middleX - bufferPixelWidth*2 , y: fourthLayerY },
      { x: middleX - bufferPixelWidth , y: fourthLayerY },
      { x: middleX, y: fourthLayerY },
      { x: middleX + bufferPixelWidth , y: fourthLayerY },
      { x: middleX + bufferPixelWidth*2 , y: fourthLayerY },
      { x: middleX + bufferPixelWidth*3 , y: fourthLayerY },
    ];
    let fifthLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsFifthLayer = [
      { x: middleX - bufferPixelWidth*2 - bufferPixelWidth/2, y: fifthLayerY },
      { x: middleX - bufferPixelWidth - bufferPixelWidth/2 , y: fifthLayerY },
      { x: middleX - bufferPixelWidth/2, y: fifthLayerY },
      { x: middleX + bufferPixelWidth/2, y: fifthLayerY },
      { x: middleX + bufferPixelWidth + bufferPixelWidth/2 , y: fifthLayerY },
      { x: middleX + bufferPixelWidth*2 + bufferPixelWidth/2, y: fifthLayerY },
    ];
    let sixthLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsSixthLayer = [
      { x: middleX - bufferPixelWidth*3 , y: sixthLayerY },
      { x: middleX - bufferPixelWidth*2 , y: sixthLayerY },
      { x: middleX - bufferPixelWidth , y: sixthLayerY },
      { x: middleX, y: sixthLayerY },
      { x: middleX + bufferPixelWidth , y: sixthLayerY },
      { x: middleX + bufferPixelWidth*2 , y: sixthLayerY },
      { x: middleX + bufferPixelWidth*3 , y: sixthLayerY },
    ];
    let seventhLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsSeventhLayer = [
      { x: middleX - bufferPixelWidth*2 - bufferPixelWidth/2, y: seventhLayerY },
      { x: middleX - bufferPixelWidth - bufferPixelWidth/2 , y: seventhLayerY },
      { x: middleX - bufferPixelWidth/2, y: seventhLayerY },
      { x: middleX + bufferPixelWidth/2, y: seventhLayerY },
      { x: middleX + bufferPixelWidth + bufferPixelWidth/2 , y: seventhLayerY },
      { x: middleX + bufferPixelWidth*2 + bufferPixelWidth/2, y: seventhLayerY },
    ];
    let eighthLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsEighthLayer = [
      { x: middleX - bufferPixelWidth*3 , y: eighthLayerY },
      { x: middleX - bufferPixelWidth*2 , y: eighthLayerY },
      { x: middleX - bufferPixelWidth , y: eighthLayerY },
      { x: middleX, y: eighthLayerY },
      { x: middleX + bufferPixelWidth , y: eighthLayerY },
      { x: middleX + bufferPixelWidth*2 , y: eighthLayerY },
      { x: middleX + bufferPixelWidth*3 , y: eighthLayerY },
    ];
    let ninthLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsNinthLayer = [
      { x: middleX - bufferPixelWidth*2 - bufferPixelWidth/2, y: ninthLayerY },
      { x: middleX - bufferPixelWidth - bufferPixelWidth/2 , y: ninthLayerY },
      { x: middleX - bufferPixelWidth/2, y: ninthLayerY },
      { x: middleX + bufferPixelWidth/2, y: ninthLayerY },
      { x: middleX + bufferPixelWidth + bufferPixelWidth/2 , y: ninthLayerY },
      { x: middleX + bufferPixelWidth*2 + bufferPixelWidth/2, y: ninthLayerY },
    ];
    let tenthLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsTenthLayer = [
      { x: middleX - bufferPixelWidth*3 , y: tenthLayerY },
      { x: middleX - bufferPixelWidth*2 , y: tenthLayerY },
      { x: middleX - bufferPixelWidth , y: tenthLayerY },
      { x: middleX, y: tenthLayerY },
      { x: middleX + bufferPixelWidth , y: tenthLayerY },
      { x: middleX + bufferPixelWidth*2 , y: tenthLayerY },
      { x: middleX + bufferPixelWidth*3 , y: tenthLayerY },
    ];
    let eleventhLayerY = firstLayerY - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7) - (bufferPixelWidth * 6/7);
    var snapPositionsEleventhLayer = [
      { x: middleX - bufferPixelWidth*2 - bufferPixelWidth/2, y: eleventhLayerY },
      { x: middleX - bufferPixelWidth - bufferPixelWidth/2 , y: eleventhLayerY },
      { x: middleX - bufferPixelWidth/2, y: eleventhLayerY },
      { x: middleX + bufferPixelWidth/2, y: eleventhLayerY },
      { x: middleX + bufferPixelWidth + bufferPixelWidth/2 , y: eleventhLayerY },
      { x: middleX + bufferPixelWidth*2 + bufferPixelWidth/2, y: eleventhLayerY },
    ];

    var occupiedSnapPositionsFirstLayer = [];
    var occupiedSnapPositionsSecondLayer = [];
    var occupiedSnapPositionsThirdLayer = [];
    var occupiedSnapPositionsFourthLayer = [];
    var occupiedSnapPositionsFifthLayer = [];
    var occupiedSnapPositionsSixthLayer = [];
    var occupiedSnapPositionsSeventhLayer = [];
    var occupiedSnapPositionsEighthLayer = [];
    var occupiedSnapPositionsNinthLayer = [];
    var occupiedSnapPositionsTenthLayer = [];
    var occupiedSnapPositionsEleventhLayer = [];

    stage.on('mousemove', function (e) {
      pixel.position({
        x: e.evt.clientX - stage.container().getBoundingClientRect().left + pixel.width() / 2,
        y: e.evt.clientY - stage.container().getBoundingClientRect().top - pixel.height() / 2,
      });

      layer.batchDraw();
    });

    stage.on('click', function (e) {
      var newPixel = pixel.clone({
        x: pixel.x(),
        y: pixel.y(),
      });

      layer.add(newPixel);

      var nearestSnap = findNearestSnapPosition(pixel, snapPositionsFirstLayer);
      var nearestSnapSecondLayer = findNearestSnapPosition(pixel, snapPositionsSecondLayer);
      var nearestSnapThirdLayer = findNearestSnapPosition(pixel, snapPositionsThirdLayer);
      var nearestSnapFourthLayer = findNearestSnapPosition(pixel, snapPositionsFourthLayer);
      var nearestSnapFifthLayer = findNearestSnapPosition(pixel, snapPositionsFifthLayer);
      var nearestSnapSixthLayer = findNearestSnapPosition(pixel, snapPositionsSixthLayer);
      var nearestSnapSeventhLayer = findNearestSnapPosition(pixel, snapPositionsSeventhLayer);
      var nearestSnapEighthLayer = findNearestSnapPosition(pixel, snapPositionsEighthLayer);
      var nearestSnapNinthLayer = findNearestSnapPosition(pixel, snapPositionsNinthLayer);
      var nearestSnapTenthLayer = findNearestSnapPosition(pixel, snapPositionsTenthLayer);
      var nearestSnapEleventhLayer = findNearestSnapPosition(pixel, snapPositionsEleventhLayer);

      var isOccupiedFirstLayer = isSnapPositionOccupied(nearestSnap, occupiedSnapPositionsFirstLayer);
      var isOccupiedSecondLayer = isSnapPositionOccupied(nearestSnapSecondLayer, occupiedSnapPositionsSecondLayer);
      var isOccupiedThirdLayer = isSnapPositionOccupied(nearestSnapThirdLayer, occupiedSnapPositionsThirdLayer);
      var isOccupiedFourthLayer = isSnapPositionOccupied(nearestSnapFourthLayer, occupiedSnapPositionsFourthLayer);
      var isOccupiedFifthLayer = isSnapPositionOccupied(nearestSnapFifthLayer, occupiedSnapPositionsFifthLayer);
      var isOccupiedSixthLayer = isSnapPositionOccupied(nearestSnapSixthLayer, occupiedSnapPositionsSixthLayer);
      var isOccupiedSeventhLayer = isSnapPositionOccupied(nearestSnapSeventhLayer, occupiedSnapPositionsSeventhLayer);
      var isOccupiedEighthLayer = isSnapPositionOccupied(nearestSnapEighthLayer, occupiedSnapPositionsEighthLayer);
      var isOccupiedNinthLayer = isSnapPositionOccupied(nearestSnapNinthLayer, occupiedSnapPositionsNinthLayer);
      var isOccupiedTenthLayer = isSnapPositionOccupied(nearestSnapTenthLayer, occupiedSnapPositionsTenthLayer);

      if (isOccupiedFirstLayer) {
        nearestSnap = nearestSnapSecondLayer;
      }
      if (isOccupiedSecondLayer) {
        nearestSnap = nearestSnapThirdLayer;
      }
      if (isOccupiedThirdLayer) {
        nearestSnap = nearestSnapFourthLayer;
      }
      if (isOccupiedFourthLayer) {
        nearestSnap = nearestSnapFifthLayer; 
      }
      if (isOccupiedFifthLayer) {
        nearestSnap = nearestSnapSixthLayer; 
      }
      if (isOccupiedSixthLayer) {
        nearestSnap = nearestSnapSeventhLayer; 
      }
      if (isOccupiedSeventhLayer) {
        nearestSnap = nearestSnapEighthLayer; 
      }
      if (isOccupiedEighthLayer) {
        nearestSnap = nearestSnapNinthLayer; 
      }
      if (isOccupiedNinthLayer) {
        nearestSnap = nearestSnapTenthLayer; 
      }
      if (isOccupiedTenthLayer) {
        nearestSnap = nearestSnapEleventhLayer; 
      }

      newPixel.to({
        x: nearestSnap.x,
        y: nearestSnap.y,
        duration: 0.4,
        onFinish: function () {
          if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer && isOccupiedFifthLayer && isOccupiedSixthLayer && isOccupiedSeventhLayer && isOccupiedEighthLayer && isOccupiedNinthLayer && isOccupiedTenthLayer) {
            occupiedSnapPositionsEleventhLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer && isOccupiedFifthLayer && isOccupiedSixthLayer && isOccupiedSeventhLayer && isOccupiedEighthLayer && isOccupiedNinthLayer) {
            occupiedSnapPositionsTenthLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer && isOccupiedFifthLayer && isOccupiedSixthLayer && isOccupiedSeventhLayer && isOccupiedEighthLayer) {
            occupiedSnapPositionsNinthLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer && isOccupiedFifthLayer && isOccupiedSixthLayer && isOccupiedSeventhLayer) {
            occupiedSnapPositionsEighthLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer && isOccupiedFifthLayer && isOccupiedSixthLayer) {
            occupiedSnapPositionsSeventhLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer && isOccupiedFifthLayer) {
            occupiedSnapPositionsSixthLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer && isOccupiedFourthLayer) {
            occupiedSnapPositionsFifthLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer && isOccupiedThirdLayer) {
            occupiedSnapPositionsFourthLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer && isOccupiedSecondLayer) {
            occupiedSnapPositionsThirdLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else if (isOccupiedFirstLayer) {
            occupiedSnapPositionsSecondLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          } else {
            occupiedSnapPositionsFirstLayer.push({ x: nearestSnap.x, y: nearestSnap.y });
          }
        },
      });

      layer.batchDraw();
    });


    var greenPixel = pixel.clone({
        x: stage.width() / 4,
        y: windowHeight / 2,
        image: pixelObjGreen,
    });
    layer.add(greenPixel);

    var yellowPixel = pixel.clone({
        x: stage.width() * (1 / 4),
        y: windowHeight * (1 / 4),
        image: pixelObjYellow,
    });

    var purplePixel = pixel.clone({
        x: stage.width() * (1 / 4),
        y: windowHeight * (3 / 4),
        image: pixelObjectPurple,
    });

    layer.add(purplePixel)
    layer.add(yellowPixel);

    layer.add(backdrop);
    layer.add(pixel);

    stage.add(layer);
  }

  
  var pixelObjGreen = new Image();
  pixelObjGreen.onload = function () {
    drawImage(this);
  };
  pixelObjGreen.src =
    'https://github.com/Xlectron/Centerstage-Scorer/blob/main/Server/assets/green.png?raw=true';

  var pixelObjYellow = new Image();
  pixelObjYellow.onload = function () {
    drawImage(this);
  };
  pixelObjYellow.src =
    'https://github.com/Xlectron/Centerstage-Scorer/blob/main/Server/assets/yellow.png?raw=true';

  var pixelObjectPurple = new Image();
  pixelObjectPurple.onload = function () {
    drawImage(this);
  };
  pixelObjectPurple.src =
    'https://github.com/Xlectron/Centerstage-Scorer/blob/main/Server/assets/purple.png?raw=true';

  var pixelObjectWhite = new Image();
  pixelObjectWhite.onload = function () {
    drawImage(this);
  };
  pixelObjectWhite.src =
    'https://github.com/Xlectron/Centerstage-Scorer/blob/main/Server/assets/white.png?raw=true';

  var backdropObj = new Image();
  backdropObj.onload = function () {
    drawImage(pixelObjGreen, this);
  };
  backdropObj.src =
    'https://github.com/Xlectron/Centerstage-Scorer/blob/main/Server/assets/backdrop.png?raw=true';
    