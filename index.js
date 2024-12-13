// Detecting button click
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
      const buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  });
  
  // Detecting keyboard press
  document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  
  // Function to play corresponding sound
  function makeSound(key) {
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3"); // 填入你的 "crash" 聲音檔案名稱
        crash.play();
        break;
  
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3"); // 填入你的 "kick-bass" 聲音檔案名稱
        kick.play();
        break;
  
      case "s":
        var snare = new Audio("sounds/snare.mp3"); // 填入你的 "snare" 聲音檔案名稱
        snare.play();
        break;
  
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3"); // 填入你的 "tom-1" 聲音檔案名稱
        tom1.play();
        break;
  
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3"); // 填入你的 "tom-2" 聲音檔案名稱
        tom2.play();
        break;
  
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3"); // 填入你的 "tom-3" 聲音檔案名稱
        tom3.play();
        break;
  
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3"); // 填入你的 "tom-4" 聲音檔案名稱
        tom4.play();
        break;
  
      default:
        console.log(key);
    }
  }
  
  // Function to animate button
  function buttonAnimation(currentKey) {
    const activeButton = document.querySelector(`.${currentKey}`);
    if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(() => activeButton.classList.remove("pressed"), 100);
    }
  }