const timelineItems = document.querySelectorAll('.timeline-item');
const timelineLine = document.querySelector('.timeline-line');
const contentItems = document.querySelectorAll('.content-item');

timelineLine.style.width = '100%';
timelineLine.style.background = 'linear-gradient(to right, #007bff 100%, #007bff 100%, #ccc 100%, #ccc 100%)';
let activeIndex = 0;

timelineItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    timelineItems[activeIndex].classList.remove('active');
    contentItems[activeIndex].classList.remove('active');
    item.classList.add('active');
    contentItems[index].classList.add('active');
    activeIndex = index;
    updateLine(activeIndex);
  });
});

function updateLine(index) {
  const percentage = (index / (timelineItems.length - 1)) * 100;
  timelineLine.style.background = `linear-gradient(to right, #007bff 0%, #007bff ${percentage}%, #ccc ${percentage}%, #ccc 100%)`;
}
