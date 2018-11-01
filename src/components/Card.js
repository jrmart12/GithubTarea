import React from 'react';
import { Grid, Row, Col, Panel, Media, Button } from 'react-bootstrap';


const CardList = props => {
    return <div>{props.cards.map(card => <Card {...card} />)}</div>

}
class Card extends React.Component {
    render() {
      let data = this.props.data
      
      if (data.notFound === 'Not Found') {
        // when username is not found...
        return <h3 className="card__notfound">User not found. Try again!</h3>
      } else {
        // if username found, then...
        return (
            <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <Panel>
                  <Panel.Body>
                    <Media>
                      <Media.Left>
                        <img width={64} height={64} src={data.avatar} alt="thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>
                            <a className="card__link" href={data.url} target="_blank">{data.username}</a>
                            </Media.Heading>
                            <h2  target="_blank">{data.description}</h2>
                      </Media.Body>
                    </Media>
                    <Button>Delete</Button>
                  </Panel.Body>
                </Panel>
              </Col>
            </Row>
          </Grid>
        )
      }
    }
  }

export default Card;