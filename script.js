const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value/10}%`
  thumb.style.transform = `translate(-${value/10}%, -50%)`
  track.style.width = `${(value/10)+1}%`
}

range.oninput = (e) => updateSlider(e.target.value)

updateSlider(range.value) 