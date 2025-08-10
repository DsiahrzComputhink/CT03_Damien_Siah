  if (bird.vel.y < -1){
    bird.img = flapUpImg;
    if(bird.rotation > (-20)){
      bird.rotation -= 4;
    }
  }
  else if(bird.vel.y > 1 ){
    bird.img = flapDownImg;
    if(bird.rotation < 20){
      bird.rotation += 2;
    }
  }
  else{
    bird.img = flapMidImg;
    if(bird.rotation > 0){
      bird.rotation -= 1;
    }
    else if(bird.rotation < 0){
      bird.rotation += 1;
    }
    else{
      bird.rotation = 0;
    }
  }