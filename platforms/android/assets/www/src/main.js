/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

// create the main context
var mainContext = Engine.createContext();

// your app here
var logo = new ImageSurface({
    size: [200, 200],
    content: 'http://192.168.11.28:3000/images/Bekazon-logo.png',
    classes: ['double-sided']
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform : function () {
        return Transform.rotateY(.002 * (Date.now() - initialTime));
    }
});

mainContext.add(centerSpinModifier).add(logo);
