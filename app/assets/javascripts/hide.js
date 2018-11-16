function hideWhenClicked(){
  document.getElementById('hide_this').addEventListener('click', (function() {
    return document.getElementByTag("a").remove()

  })

}
