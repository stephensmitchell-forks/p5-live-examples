var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.getColorVector = function (c) {
        return createVector(red(c), green(c), blue(c));
    };
    ColorHelper.rainbowColorBase = function () {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    };
    ColorHelper.getColorsArray = function (total, baseColorArray) {
        var _this = this;
        if (baseColorArray === void 0) { baseColorArray = null; }
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(function (x) { return _this.getColorVector(x); });
        ;
        var colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    };
    ColorHelper.getColorByPercentage = function (firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    };
    return ColorHelper;
}());
var MarchingSquaresHelper = (function () {
    function MarchingSquaresHelper() {
    }
    MarchingSquaresHelper.drawForCombination = function (x, y, bitmask) {
        var drawMesh = false;
        var drawLine = true;
        push();
        translate(x * PARAMS.gridSize, y * PARAMS.gridSize);
        scale(PARAMS.gridSize);
        strokeWeight(1 / PARAMS.gridSize);
        var midpoint = 0.5;
        if (bitmask == '0000') {
        }
        else if (bitmask == '0001') {
            if (drawLine)
                line(0, midpoint, midpoint, 0);
            if (drawMesh) {
                beginShape();
                vertex(0, midpoint);
                vertex(midpoint, 0);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '0010') {
            if (drawLine)
                line(1 - midpoint, 0, 1, midpoint);
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 0);
                vertex(1, midpoint);
                vertex(1, 0);
                endShape();
            }
        }
        else if (bitmask == '0011') {
            if (drawLine)
                line(0, midpoint, 1, midpoint);
            if (drawMesh) {
                beginShape();
                vertex(0, midpoint);
                vertex(1, midpoint);
                vertex(1, 0);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '0100') {
            if (drawLine)
                line(1 - midpoint, 1, 1, 1 - midpoint);
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 1);
                vertex(1, 1 - midpoint);
                vertex(1, 1);
                endShape();
            }
        }
        else if (bitmask == '0101') {
            pop();
            MarchingSquaresHelper.drawForCombination(x, y, '0001');
            pop();
            MarchingSquaresHelper.drawForCombination(x, y, '0100');
        }
        else if (bitmask == '0110') {
            if (drawLine)
                line(midpoint, 0, midpoint, 1);
            if (drawMesh) {
                beginShape();
                vertex(midpoint, 0);
                vertex(midpoint, 1);
                vertex(1, 1);
                vertex(1, 0);
                endShape();
            }
        }
        else if (bitmask == '0111') {
            if (drawLine)
                line(0, 1 - midpoint, midpoint, 1);
            if (drawMesh) {
                beginShape();
                vertex(0, 1 - midpoint);
                vertex(midpoint, 1);
                vertex(1, 1);
                vertex(1, 0);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '1000') {
            if (drawLine)
                line(0, 1 - midpoint, midpoint, 1);
            if (drawMesh) {
                beginShape();
                vertex(0, 1 - midpoint);
                vertex(midpoint, 1);
                vertex(0, 1);
                y;
                endShape();
            }
        }
        else if (bitmask == '1001') {
            if (drawLine)
                line(1 - midpoint, 0, 1 - midpoint, 1);
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 0);
                vertex(1 - midpoint, 1);
                vertex(0, 1);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '1010') {
            pop();
            MarchingSquaresHelper.drawForCombination(x, y, '0010');
            pop();
            MarchingSquaresHelper.drawForCombination(x, y, '1000');
        }
        else if (bitmask == '1011') {
            if (drawLine)
                line(1 - midpoint, 1, 1, 1 - midpoint);
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 1);
                vertex(1, 1 - midpoint);
                vertex(1, 0);
                vertex(0, 0);
                vertex(0, 1);
                endShape();
            }
        }
        else if (bitmask == '1100') {
            if (drawLine)
                line(0, 1 - midpoint, 1, 1 - midpoint);
            if (drawMesh) {
                beginShape();
                vertex(0, 1 - midpoint);
                vertex(1, 1 - midpoint);
                vertex(1, 1);
                vertex(0, 1);
                endShape();
            }
        }
        else if (bitmask == '1101') {
            if (drawLine)
                line(midpoint, 0, 1, midpoint);
            if (drawMesh) {
                beginShape();
                vertex(midpoint, 0);
                vertex(1, midpoint);
                vertex(1, 1);
                vertex(0, 1);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '1110') {
            if (drawLine)
                line(midpoint, 0, 0, midpoint);
            if (drawMesh) {
                beginShape();
                vertex(midpoint, 0);
                vertex(0, midpoint);
                vertex(0, 1);
                vertex(1, 1);
                vertex(1, 0);
                endShape();
            }
        }
        else if (bitmask == '1111') {
            if (drawMesh) {
                beginShape();
                vertex(0, 0);
                vertex(0, 1);
                vertex(1, 1);
                vertex(1, 0);
                endShape();
            }
        }
        else {
            console.log('bad number' + bitmask);
        }
        pop();
    };
    MarchingSquaresHelper.getCurrentPointArray = function (points) {
        var res = [];
        for (var y = 0; y < height / PARAMS.gridSize; y++) {
            res[y] = [];
            for (var x = 0; x < width / PARAMS.gridSize; x++) {
                res[y][x] = 0;
            }
        }
        var maxGridX = width / PARAMS.gridSize;
        var maxGridY = height / PARAMS.gridSize;
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            var xmin = Math.max(0, floor((p.x - p.r) / PARAMS.gridSize));
            var ymin = Math.max(0, floor((p.y - p.r) / PARAMS.gridSize));
            var xmax = Math.min(maxGridX - 1, ceil((p.x + p.r) / PARAMS.gridSize));
            var ymax = Math.min(maxGridY - 1, ceil((p.y + p.r) / PARAMS.gridSize));
            for (var y = ymin; y <= ymax; y++) {
                for (var x = xmin; x <= xmax; x++) {
                    var insidePoint = p.inside(x * PARAMS.gridSize, y * PARAMS.gridSize);
                    if (insidePoint) {
                        try {
                            res[y][x] += 1;
                        }
                        catch (ex) {
                            console.log(y, x);
                        }
                        point(x * PARAMS.gridSize, y * PARAMS.gridSize);
                    }
                }
            }
        }
        return res;
    };
    MarchingSquaresHelper.drawSquares = function (pointsArr) {
        for (var y = 1; y < pointsArr.length - 1; y++) {
            var point = pointsArr[y];
            for (var x = 1; x < point.length - 1; x++) {
                var p1 = pointsArr[y][x] > 0 ? '1' : '0';
                var p2 = pointsArr[y][x + 1] > 0 ? '1' : '0';
                var p4 = pointsArr[y + 1][x + 1] > 0 ? '1' : '0';
                var p8 = pointsArr[y + 1][x] > 0 ? '1' : '0';
                MarchingSquaresHelper.drawForCombination(x, y, p8 + p4 + p2 + p1);
            }
        }
    };
    return MarchingSquaresHelper;
}());
var Point = (function () {
    function Point(x, y, vx, vy, r) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
    }
    Point.prototype.draw = function () {
        point(this.x, this.y);
        circle(this.x, this.y, this.r);
    };
    Point.prototype.inside = function (x, y) {
        var res = (this.r * this.r) / (((x - this.x) * (x - this.x)) + ((y - this.y) * (y - this.y)));
        return res >= 1;
    };
    return Point;
}());
var PARAMS = {
    gridSize: 10,
    pointSize: 10
};
var points;
var sliderGridSize;
function setup() {
    createCanvas(600, 600);
    PARAMS.pointSize = width / 10;
    points = [];
    points.push(new Point(5 * PARAMS.pointSize, 2 * PARAMS.pointSize, Math.random() * 2 - 1, Math.random() * 2 - 1, PARAMS.pointSize));
    points.push(new Point(5 * PARAMS.pointSize, 3 * PARAMS.pointSize, Math.random() * 2 - 1, Math.random() * 2 - 1, PARAMS.pointSize));
    points.push(new Point(5 * PARAMS.pointSize, 4 * PARAMS.pointSize, Math.random() * 2 - 1, Math.random() * 2 - 1, PARAMS.pointSize * 1.5));
    points.push(new Point(6 * PARAMS.pointSize, 4 * PARAMS.pointSize, Math.random() * 2 - 1, Math.random() * 2 - 1, PARAMS.pointSize * 2));
    points.push(new Point(6 * PARAMS.pointSize, 5 * PARAMS.pointSize, Math.random() * 2 - 1, Math.random() * 2 - 1, PARAMS.pointSize));
    points.push(new Point(6 * PARAMS.pointSize, 6.2 * PARAMS.pointSize, Math.random() * 2 - 1, Math.random() * 2 - 1, PARAMS.pointSize * 2));
    sliderGridSize = createSlider(2, 30, PARAMS.gridSize, 2);
    sliderGridSize.position(10, 10);
}
function draw() {
    background(1);
    PARAMS.gridSize = sliderGridSize.value();
    stroke('red');
    strokeWeight(0.4);
    push();
    for (var i = 0; i < width / PARAMS.gridSize; i++) {
        line(i * PARAMS.gridSize, 0, i * PARAMS.gridSize, height);
    }
    for (var j = 0; j < height / PARAMS.gridSize; j++) {
        line(0, j * PARAMS.gridSize, width, j * PARAMS.gridSize);
    }
    pop();
    var arr = MarchingSquaresHelper.getCurrentPointArray(points);
    MarchingSquaresHelper.drawSquares(arr);
    push();
    var c = color('green');
    c.setAlpha(100);
    stroke(c);
    alpha;
    strokeWeight(1);
    noFill();
    for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
        var p = points_2[_i];
        p.draw();
    }
    pop();
    for (var _a = 0, _b = this.points; _a < _b.length; _a++) {
        var p = _b[_a];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x - p.r < 0 || p.x + p.r > width) {
            p.vx *= -1;
        }
        if (p.y - p.r < 0 || p.y + p.r > height) {
            p.vy *= -1;
        }
    }
    ;
    textSize(15);
    noStroke();
    fill(255);
    text('fps: ' + frameRate(), 10, 50);
}