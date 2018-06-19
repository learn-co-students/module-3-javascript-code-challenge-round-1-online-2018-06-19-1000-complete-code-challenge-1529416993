document.addEventListener('DOMContentLoaded', function() {

  const imageId = 18 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`


// console.log("DOM fully loaded and parsed");
  ajaxHandlers()

})

const ajaxHandlers = () => {
  $('#image').on('load', function(e) {
    e.preventDefault()
    // console.log('hello')
    // console.log(`${imageURL}`)
    // $.get('https://randopic.herokuapp.com/images/18', function(data) {
    fetch('https://randopic.herokuapp.com/images/18')
    // fetch(`${imageURL}`)
      .then(res => res.json())
      .then(json => json)
        $('#name').html('')
        const newImage = new Image(image)
        console.log(newImage) //this console.log is giving me everything undefined.
        const placeImageName = newImage.formatImageName()

    $('#name').html(placeImageName)

  })
}

function Image(image) {
  this.id = image.id
  this.url = image.url
  this.name = image.name
  this.likeCount = image.like_count
}

Image.prototype.formatImageName = function() {
  let imageName = `
    <li>${this.name}</li>
  `
  return imageName
}

function showImageName(json) {
  $('#name').append(`${image.name}`)
}
