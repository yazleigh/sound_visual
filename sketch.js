let mic, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  noFill();
  
  mic = new p5.AudioIn();
  mic.start();
  fft1 = new p5.FFT();
  fft1.setInput(mic);
  
  fft2 = new p5.FFT();
  fft2.setInput(mic);
  
  fft3 = new p5.FFT();
  fft3.setInput(mic);
}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(1.5)
  noFill()
  
  translate(width / 2, height / 2)
  
  fft1.analyze()
  amp1 = fft1.getEnergy(20, 200)
  
  var wave1 = fft1.waveform()
  
  for (var t = -1; t <= 1; t +=2 ){
    beginShape()
    for (var i = 0; i <= 180; i+= 0.5){
      var index = floor(map(i, 0, 180, 0, wave1.length - 1))
    
      var r = map(wave1[index], -1, 1, 150, 350)
    
      var x = r * sin(i) * t
      var y = r * cos(i)
      vertex(x, y)
    }
    endShape()
}
    fft2.analyze()
  amp2 = fft2.getEnergy(0.1, 250)
  
  var wave2 = fft2.waveform()
  
  for (var t = -1; t <= 1; t +=2 ){
    beginShape()
    for (var i = 0; i <= 180; i+= 0.5){
      var index = floor(map(i, 0, 180, 0, wave2.length - 1))
    
      var r = map(wave2[index], -1, 1, 150, 500)
    
      var x = r * sin(i) * t
      var y = r * cos(i)
      vertex(x, y)
    }
    endShape()
  }
    fft3.analyze()
  amp3 = fft3.getEnergy(30, 200)
  
  var wave3 = fft3.waveform()
  
  for (var t = -1; t <= 1; t +=2 ){
    beginShape()
    for (var i = 0; i <= 180; i+= 0.5){
      var index = floor(map(i, 0, 180, 0, wave3.length - 1))
    
      var r = map(wave3[index], -1, 1, 150, 300)
    
      var x = r * sin(i) * t
      var y = r * cos(i)
      vertex(x, y)
    }
    endShape()
}
}
  //let spectrum = fft.analyze();

  //beginShape();
  //for (i = 0; i < spectrum.length; i++) {
    //vertex(i, map(spectrum[i], 0, 255, height, 0));
  //}
  //endShape();
//}