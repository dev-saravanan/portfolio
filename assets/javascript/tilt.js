


var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  })



  var downloadBtn = document.getElementById("downloadBtn");

  // Add a click event listener to the button
  downloadBtn.addEventListener("click", function() {
    // Create a new anchor element
    var link = document.createElement("a");
    link.href = "PDF/Saravanan Resume.pdf"; // Replace with the actual path to your PDF file
    link.download = "Saravanan Resume.pdf"; // Set the desired file name for the downloaded PDF

    // Append the link to the document body
    document.body.appendChild(link);

    // Simulate a click event on the link to start the download
    link.click();

    // Remove the link from the document body after the download starts
    document.body.removeChild(link);
  });





    
    
    
    
    
    
    
    
    
    
    //tilt effect
    /* Store the element in el */
    let el = document.getElementById('tilt')

    /* Get the height and width of the element */
    const height = el.clientHeight
    const width = el.clientWidth
    
    /*
      * Add a listener for mousemove event
      * Which will trigger function 'handleMove'
      * On mousemove
      */
    el.addEventListener('mousemove', handleMove)
    
    /* Define function a */
    function handleMove(e) {
      /*
        * Get position of mouse cursor
        * With respect to the element
        * On mouseover
        */
      /* Store the x position */
      const xVal = e.layerX
      /* Store the y position */
      const yVal = e.layerY
      
      /*
        * Calculate rotation valuee along the Y-axis
        * Here the multiplier 20 is to
        * Control the rotation
        * You can change the value and see the results
        */
      const yRotation = 20 * ((xVal - width / 2) / width)
      
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height)
      
      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      /* Apply the calculated transformation */
      el.style.transform = string
    }
    
    /* Add listener for mouseout event, remove the rotation */
    el.addEventListener('mouseout', function() {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mousedown event, to simulate click */
    el.addEventListener('mousedown', function() {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mouseup, simulate release of mouse click */
    el.addEventListener('mouseup', function() {
      el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })


    //------------------------------------------------------------------------

        //tilt effect
    /* Store the element in el */
    let el1 = document.getElementById('tilt1')
    const height1 = el1.clientHeight
    const width1 = el1.clientWidth
    
    el1.addEventListener('mousemove', handleMove1)
    
    /* Define function a */
    function handleMove1(e) {
      const xVal = e.layerX
      const yVal = e.layerY
      const yRotation = 20 * ((xVal - width / 2) / width)
      
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height)
      
      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      /* Apply the calculated transformation */
      el1.style.transform = string
    }
    
    /* Add listener for mouseout event, remove the rotation */
    el1.addEventListener('mouseout', function() {
      el1.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mousedown event, to simulate click */
    el1.addEventListener('mousedown', function() {
      el1.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mouseup, simulate release of mouse click */
    el1.addEventListener('mouseup', function() {
      el1.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })




    //------------------------------------------------------------------------

        //tilt effect
    /* Store the element in el */
    let el2 = document.getElementById('tilt2')
    const height2 = el2.clientHeight
    const width2 = el2.clientWidth
    
    el2.addEventListener('mousemove', handleMove2)
    
    /* Define function a */
    function handleMove2(e) {
      const xVal = e.layerX
      const yVal = e.layerY
      const yRotation = 20 * ((xVal - width / 2) / width)
      
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height)
      
      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      /* Apply the calculated transformation */
      el2.style.transform = string
    }
    
    /* Add listener for mouseout event, remove the rotation */
    el2.addEventListener('mouseout', function() {
      el2.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mousedown event, to simulate click */
    el2.addEventListener('mousedown', function() {
      el2.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mouseup, simulate release of mouse click */
    el2.addEventListener('mouseup', function() {
      el2.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })





    //------------------------------------------------------------------------

        //tilt effect
    /* Store the element in el */
    let el3 = document.getElementById('tilt3')
    const height3 = el3.clientHeight
    const width3 = el3.clientWidth
    
    el3.addEventListener('mousemove', handleMove3)
    
    /* Define function a */
    function handleMove3(e) {
      const xVal = e.layerX
      const yVal = e.layerY
      const yRotation = 20 * ((xVal - width / 2) / width)
      
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height)
      
      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      /* Apply the calculated transformation */
      el3.style.transform = string
    }
    
    /* Add listener for mouseout event, remove the rotation */
    el3.addEventListener('mouseout', function() {
      el3.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mousedown event, to simulate click */
    el3.addEventListener('mousedown', function() {
      el3.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })
    
    /* Add listener for mouseup, simulate release of mouse click */
    el3.addEventListener('mouseup', function() {
      el3.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })