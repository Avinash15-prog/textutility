import React from 'react'

export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })

    let myStyle = {
      color: props.mode ==='dark'?'white':'black',
      backgroundColor: props.mode === 'dark' ?'rgb(24 46 67)':'white',
    }
    let buttonStyle = {
      color: props.mode ==='dark'?'white':'black',
      backgroundColor: props.mode === 'dark' ?'#2b3035':'white'
    }

    return (
        <div className="container" style = {myStyle}>
            <h1>  About Us </h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5> ● Examine Your Text </h5>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={buttonStyle}>
                <p>Tefficacy gives you a way to analyze your text quickly and efficiently. Be it the total Word count, Character count, Time to read etc.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5> ● Free to use </h5>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={buttonStyle}>
                <p>Tefficacy is a free application tool that provides instant character count & word count statistics for a given text. Tefficacy works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera and many more. It suits to count/manipulate characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" style={buttonStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h5> ● Contributors </h5>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={buttonStyle}>
                <p>Hi, my name is Avinash Saklani. I am currently pursuing my Bachelors in Computer Science and Engineering from Chandigarh Engineering College, India.</p>
                <p><i>Thanks for Using Tefficacy</i></p>

              </div>
            </div>
          </div>
        </div>

            
        </div>
    )
}
