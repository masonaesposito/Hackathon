import React, { Component } from 'react';
import axios from 'axios';
import Unsplash, { toJson } from 'unsplash-js';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unsplash: '',
      quote: ''
    }




    const unsplash = new Unsplash({
      applicationId: "9a4b72d8ecc00b361d84896196c4d04ac170bf9e38b961f648369629d58935cb",
      secret: "0e5cb2a5244ff1815787de03a449670fc2525c66a5c59cdf0cf0e35fb1d1bb59",
      callbackUrl: ''
    });


    unsplash.search.photos('spa', 1)
      .then(toJson)
      .then(json => {
        console.log(json);
        this.setState({ unsplash: json.results })
      })




  }



  componentWillMount() {
    console.log("In the componentWillMount");

    axios
      .post('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
      .then(response => response.data)
      .then(quote => {
        console.log("We got response from remote site", quote);
        this.setState({ quote });
      });
  }




  render() {



    const photos = this.state.unsplash
    const randomVariable = Math.floor(Math.random() * photos.length)
    const photo1 = photos[randomVariable]
    console.log(randomVariable)

    const quote = this.state.quote
    




    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Float Spa</h1>
        <p className='lead'><strong>Let Your Worries Float Away</strong></p>


        <hr className='my-4'></hr>
        <strong><p>Best Float Spa In The World, Come In And Relax</p></strong>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">




        </nav>
        <p className='lead'>
          <a className='article'>Float therapy is a powerful tool for wellness, relaxation, pain relief and better sleep. As with any therapy, with regular use its benefits are enhanced. Stress, tension and pain have formed over time and will take some time to experience the greatest relief—luckily, floating is a relaxing, fun,and effortless way to do so!</a>
        </p>
        <div className='card' id='card-1'>
          <div className='card-header' id='card-header-1'><strong>Hours</strong></div>
          <div className='card-body' id='card-body-1'>
            <ul>
              <li>Sunday: 12AM-8PM</li>
              <li>Monday: 11AM-8:30PM</li>
              <li>Tuesday: 11AM-8:30PM</li>
              <li>Wednesday: 11AM-8:30PM</li>
              <li>Thurday: 11AM-8:30PM</li>
              <li>Friday: 11AM-8:30PM</li>
              <li>Saturday: 12AM-8PM</li>

            </ul>
          </div>
        </div>

        {photo1 && <div> <img src={photo1.urls.small} className='photo' /> </div>}
        { quote && <div> <h3 className='quote'>{quote.quoteText} </h3> <h3 className= 'author'>{quote.quoteAuthor}</h3> </div>}

        <div className='card' id='card-2'>
          <div className='card-header'><strong>Contact</strong></div>
          <div className='card-body'>
            <ul>
              <li>Phone: 1(760) 555-5555</li>
              <li>Email: FloatSpa@gmail.com</li>
              <li>Instagram: @FloatSpaSD</li>
            </ul>

          </div>
        </div>

        



      </div>

    );
  }
}
export default Hello