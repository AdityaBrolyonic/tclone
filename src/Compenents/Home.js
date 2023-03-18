import React from 'react'
// import Header from './Header';
import Section from './Section';
import styled from 'styled-components';

function Home() {
  return (
<Container>
<Section 
title = "Model 3"
desc = "Leasing starting at $349/mo"
bgimg = "model-3.jpg"
left = "Custom Order" 
right = "Demo Drive"/>

<Section 
title = "Model Y"
desc = ""
bgimg = "model-y.jpg"
left = "Custom Order" 
right = "Demo Drive"/>

<Section 
title = "Model S"
desc = "Schedule a Demo Drive"
bgimg = "model-s.jpg"
left = "Custom Order" 
right = "View Inventory"/>

<Section 
title = "Model X"
desc = "Schedule a Demo Drive"
bgimg = "model-x.jpg"
left = "Custom Order" 
right = "View Inventory"/>

<Section 
title = "Solar Panels"
desc = "Lowest Cost Solar Panels in America"
bgimg = "solar-panel.jpg"
left = "Order NOW" 
right = "Learn More"/>

<Section 
title = "Solar Roof"
desc = "Produce Clean Energy From Your Roof"
bgimg = "solar-roof.jpg"
left = "Order Now" 
right = "Learn More"/>

<Section 
title = "Accessories"
desc = ""
bgimg = "accessories.jpg"
left = "Shop Now" 
right = ""/>
</Container>
  )
}

export default Home

const Container = styled.div
`height : 100vh;
width : 100vw;
`