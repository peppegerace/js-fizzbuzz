const boxesContainer = document.querySelector('.boxes');
for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  
  console.log(i)

  boxesContainer.append(box);
}

