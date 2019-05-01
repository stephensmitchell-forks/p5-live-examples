class ColorHelper
{
    private static getColorVector (c: p5.Color) {
        return createVector(
            red(c), 
            green(c),
            blue(c)
        );
    }

    public static getColorsArray (total: number, betweenColors: p5.Color[] = null): p5.Color[] {
        
        if(betweenColors == null) {
            betweenColors = [
                color('red'),
                color('orange'),
                color('yellow'),
                color('green'),
                color(38, 58, 150),
                color('indigo'),
                color('violet')
            ]
        }

        var rainbowColors = <p5.Vector[]>[];
        for(var i = 0; i < betweenColors.length; i++) {
                rainbowColors[i] = this.getColorVector(betweenColors[i]);
            }        
        
        let colours = new Array<p5.Color>();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);

            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;

            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex],
            rainbowColors[colorIndex + 1],
            colorPercentage);

            colours.push(color(nameColor.x, nameColor.y, nameColor.z))
        }

        return colours;
    }

    private static getColorByPercentage(firstColor, secondColor, percentage) {
        // assumes colors are p5js vectors
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();

        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    }
}