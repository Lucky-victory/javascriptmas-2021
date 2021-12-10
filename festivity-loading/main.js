const meter=document.querySelector('.meter');
const tooltipText=document.querySelector('.tooltip-text');
const tooltip=document.querySelector('.tooltip');
const christmas=new Date('2021-12-25T00:00:00').getTime();
const today=new Date().getTime();
const dateDiff= christmas - today;
const oneDay= 24 * 60* 60* 1000;
const daysLeft = Math.floor(dateDiff / oneDay);

function updateMeter(){
  tooltipText.textContent=daysLeft+' days left'
  meter.value=daysLeft;
  const meterWidth = meter.offsetWidth;
  const meterValue = meter.value;
  const meterMax = meter.max;
  tooltip.style.left=Math.floor(
((meterWidth / meterMax) * meterValue - tooltip.offsetWidth/2))+'px'

}
updateMeter();