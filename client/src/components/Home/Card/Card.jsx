/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';

const NewsCard = ({item}) => {
  return (

    
    <div className='cards_container'>
        
        <Card className='newCard'>
            <Card.Img className='cardImage' variant="top" src={item.urlToImage !== null ? item.urlToImage : 'https://placehold.co/400x200'} />
            <Card.Body className='cardBody'>
                <Card.Title>{item.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.source.name}</Card.Subtitle>
                <Card.Text>{item.title}</Card.Text>
                <div className='cardLink'>
                    <Card.Link className='me-3' href={item.url}>Abrir</Card.Link>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default NewsCard