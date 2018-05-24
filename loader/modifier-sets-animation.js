(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"modifier_sets_animation_atlas_", frames: [[0,3076,70,70],[0,1538,2048,1536],[0,0,2048,1536]]}
];


// symbols:



(lib.Oval = function() {
	this.spriteSheet = ss["modifier_sets_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_1527159752 = function() {
	this.spriteSheet = ss["modifier_sets_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_1527159779 = function() {
	this.spriteSheet = ss["modifier_sets_animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Oval();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-35,-35,70,70), null);


(lib.overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("Eg2wAlbMAAAhK1MBthAAAMAAABK1g");
	this.shape.setTransform(350.5,239.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.overlay, new cjs.Rectangle(0,0,701,479), null);


(lib.fh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AzckcMAm5AAAIAAI5Mgm5AAAg");
	this.shape.setTransform(124.5,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00C0F4").s().p("AzcEdIAAo5MAm5AAAIAAI5g");
	this.shape_1.setTransform(124.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fh, new cjs.Rectangle(-1,-1,251,59), null);


(lib.loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


// stage content:
(lib.modifiersetsanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(this.currentFrame + 1);
		
		}
		this.stop();
			console.log(this.currentFrame);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44));

	// btn
	this.btn1 = new lib.fh();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(158,383.6,1.221,7.701,0,0,0,124.5,28.5);
	this.btn1.alpha = 0.012;

	this.btn2 = new lib.fh();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(158,383.6,1.221,7.701,0,0,0,124.5,28.5);
	this.btn2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1}]}).to({state:[{t:this.btn2}]},40).wait(4));

	// Layer_9
	this.instance = new lib.loader("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(671.3,354.3,1,1,0,0,0,28.7,28.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},29).wait(14));

	// Layer_2
	this.instance_1 = new lib.overlay();
	this.instance_1.parent = this;
	this.instance_1.setTransform(673.5,368.6,1,1,0,0,0,350.4,239.5);
	this.instance_1.alpha = 0.898;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(29).to({alpha:0.012},10).wait(4));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("AoOCgIAAk/IQdAAIAAE/g");
	this.shape.setTransform(672.7,151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al7ZHIAAknIEOAAIAAEngA5sY2IAAkOIDkAAIAAEOgAB2LiIAA4PMAzJAAAIAAYPgAr/JbIAAknIIcAAIAAEngAWR0FIAAlBIHhAAIAAFBgEg0+gUWIAAkWIKSAAIAAEWg");
	this.shape_1.setTransform(675.6,373.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},29).wait(14));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgYNAi7MAAAhF1MAwbAAAMAAABF1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:158,y:384.5}).wait(43));

	// Layer_5
	this.instance_2 = new lib.Screenshot_1527159779();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(43));

	// Layer_1
	this.instance_3 = new lib.Screenshot_1527159752();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.Screenshot_1527159779();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},30).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);
// library properties:
lib.properties = {
	id: '631F21867723464EB326054D3B6AD5A7',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/modifier_sets_animation_atlas_.png?1527164222221", id:"modifier_sets_animation_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['631F21867723464EB326054D3B6AD5A7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;