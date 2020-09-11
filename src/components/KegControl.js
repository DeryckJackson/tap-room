import React from 'react';

class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      kegList: [
        {
          name: "Bottom Shelf Brew",
          brand: "OnTap",
          price: 3,
          alcoholContent: "4%"
        },
        {
          name: "Middle of the Line",
          brand: "OnTap",
          price: 4,
          alcoholContent: "5%"
        },
        {
          name: "Top Shelf Brew",
          brand: "OnTap",
          price: 5,
          alcoholContent: "6%"
        }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <TicketList kegList={this.state.kegList} />
      </React.Fragment>
    )
  }
}